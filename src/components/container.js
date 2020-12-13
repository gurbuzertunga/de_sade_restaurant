export default function container() {
  const page = document.createElement('div');
  document.body.prepend(page);
  page.id = 'content';
}