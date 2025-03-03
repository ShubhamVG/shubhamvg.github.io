enum NavbarRoute {
  project(label: 'Projects', path: '/projects'),
  blogs(label: 'Blogs', path: '/blogs'),
  goals(label: 'Goals', path: '/goals'),
  supports(label: 'Support', path: '/support'),
  contacts(label: 'Contacts & Socials', path: '/contacts'),
  favTech(label: 'Fav Tech', path: '/fav-tech'),
  journey(label: 'Journey', path: '/journey'),
  skillsHobbies(label: 'Skills & Hobbies', path: '/skills-hobbies');

  const NavbarRoute({required this.label, required this.path});

  final String label;
  final String path;
}

enum AdditionalRoutes {
  privacy(label: 'Privacy', path: '/privacy');

  const AdditionalRoutes({required this.label, required this.path});

  final String label;
  final String path;
}

const blueSkyLink = 'https://bsky.app/profile/lavisse.bsky.social';
const cvLink =
    'https://docs.google.com/document/d/1UrYJvRJvo7pJ793CHAQnNzk-1yKYCKel';
const hackathon1DevpostLink =
    'https://devpost.com/software/static-art-into-dynamic-life';
const emailLink = 'mailto:vgshubham50@gmail.com';
const githubLink = 'https://github.com/ShubhamVG';
const kofiLink = 'https://ko-fi.com/brainiacsin';
const recyclopiaLink = 'https://devpost.com/software/recyclopia';
const youtubeLink = 'https://www.youtube.com/@bottleofotter';
