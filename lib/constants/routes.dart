enum NavbarRoute {
  project(label: 'Projects', path: '/projects/'),
  blogs(label: 'Blogs', path: '/blogs/'),
  goals(label: 'Goals', path: '/goals/'),
  supports(label: 'Support', path: '/support/'),
  contacts(label: 'Contacts & Socials', path: '/contacts/'),
  favTech(label: 'Fav Tech', path: '/fav-tech/'),
  journey(label: 'Journey', path: '/journey/'),
  skillsHobbies(label: 'Skills & Hobbies', path: '/skills-hobbies/');

  const NavbarRoute({required this.label, required this.path});

  final String label;
  final String path;
}

enum AdditionalRoutes {
  privacy(label: 'Privacy', path: '/privacy/');

  const AdditionalRoutes({required this.label, required this.path});

  final String label;
  final String path;
}

const blueSkyLink = 'https://bsky.app/profile/lavisse.bsky.social';
const emailLink = 'mailto:vxshubham49@gmail.com';
const githubLink = 'https://github.com/ShubhamVG/';
const kofiLink = 'https://ko-fi.com/brainiacsin';
