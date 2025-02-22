enum NavbarRoute {
  project(label: 'Projects', path: '/projects/'),
  blogs(label: 'Blogs', path: '/blogs/'),
  goals(label: 'Goals', path: '/goals/'),
  supports(label: 'Support', path: '/support/'),
  socials(label: 'Socials', path: '/socials/'),
  favTech(label: 'Fav Tech', path: '/fav-tech/'),
  journey(label: 'Journey', path: '/journey/'),
  skillsHobbies(label: 'Skills & Hobbies', path: '/skills-hobbies/');

  const NavbarRoute({required this.label, required this.path});

  final String label;
  final String path;
}

const githubLink = 'https://github.com/ShubhamVG/';
const kofiLink = 'https://ko-fi.com/brainiacsin';
