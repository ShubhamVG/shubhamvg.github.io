import 'dart:convert';
import 'dart:js_interop';

import 'package:web/web.dart' as web;

import '../../commons.dart';

void main() async {
  addBasicListeners();
  startTime();
  _loadYearProgress();
  await _loadGoals();
}

web.HTMLImageElement get _crownElem {
  final crownLogo = web.document.createElement('img') as web.HTMLImageElement
    ..alt = 'crown'
    ..className = 'crown'
    ..src = 'assets/crown.svg';

  return crownLogo;
}

Future<void> _loadGoals() async {
  final finishedGoalsContainer = web.document
      .getElementById('finished-goals-container') as web.HTMLDivElement;

  final pendingGoalsContainer = web.document
      .getElementById('pending-goals-container') as web.HTMLDivElement;

  final goals = await _getGoals(toSort: true);

  for (final goal in goals) {
    if (goal.progress == 100) {
      final finishedGoalDiv = _makeFinishedGoalElem(goal);
      finishedGoalsContainer.appendChild(finishedGoalDiv);
    } else {
      final pendingGoalDiv = _makePendingGoalElem(goal);
      pendingGoalsContainer.appendChild(pendingGoalDiv);
    }
  }
}

void _loadYearProgress() {
  final duration = DateTime.now().difference(DateTime(2025));
  final yearProgressPercentage = duration.inDays * 100 ~/ 365;
  final yearProgress =
      web.document.getElementById('year-progress') as web.HTMLDivElement;
  yearProgress.style.setProperty('--progress', '$yearProgressPercentage%');
}

web.HTMLDivElement _makeFinishedGoalElem(final Goal goal) {
  final div = web.document.createElement('div') as web.HTMLDivElement
    ..className = 'goal';

  final textDiv = web.document.createElement('div') as web.HTMLDivElement
    ..className = 'goal-text'
    ..innerText = goal.text;

  final progressDiv = web.document.createElement('div') as web.HTMLDivElement
    ..className = 'goal-progress'
    ..style.setProperty('--progress', '100%');

  final crown = _crownElem;

  final logoSrc = goal.iconUrl.startsWith('https://')
      ? goal.iconUrl
      : 'assets/${goal.iconUrl}';

  final logo = web.document.createElement('img') as web.HTMLImageElement
    ..alt = goal.iconUrl
    ..className = 'goal-logo'
    ..src = logoSrc;

  progressDiv
    ..appendChild(crown)
    ..appendChild(logo);

  div
    ..appendChild(textDiv)
    ..appendChild(progressDiv);

  return div;
}

web.HTMLDivElement _makePendingGoalElem(final Goal goal) {
  final div = web.document.createElement('div') as web.HTMLDivElement
    ..className = 'goal';

  final progressDiv = web.document.createElement('div') as web.HTMLDivElement
    ..className = 'goal-progress'
    ..style.setProperty(
      '--progress',
      '${goal.progress}%',
    );

  final logoSrc = goal.iconUrl.startsWith('https://')
      ? goal.iconUrl
      : 'assets/${goal.iconUrl}';

  final logo = web.document.createElement('img') as web.HTMLImageElement
    ..alt = goal.iconUrl
    ..className = 'goal-logo'
    ..src = logoSrc;

  progressDiv.appendChild(logo);

  final textDiv = web.document.createElement('div') as web.HTMLDivElement
    ..className = 'goal-text'
    ..innerText = goal.text;

  div
    ..appendChild(progressDiv)
    ..appendChild(textDiv);

  return div;
}

// ========================== GOAL STUFF =================================
final class Goal {
  const Goal({
    required this.iconUrl,
    required this.text,
    required this.progress,
  });

  final String iconUrl;
  final String text;
  final int progress;
}

Future<List<Goal>> _getGoals({final bool toSort = false}) async {
  final goals = <Goal>[];

  final jsonFile = await web.window.fetch('goals.json'.toJS).toDart;
  final jsonText = (await jsonFile.text().toDart).toDart;

  final listJson = (jsonDecode(jsonText) as List).cast<Map<String, dynamic>>();

  for (final json in listJson) {
    goals.add(Goal(
      iconUrl: json['icon']!,
      text: json['text']!,
      progress: json['progress']!,
    ));
  }

  if (toSort) {
    goals.sort((g1, g2) => g2.progress - g1.progress);
  }

  return goals;
}
