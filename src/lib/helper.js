export function slugify(str, replace = '-') {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^\w^/\s-]/g, '')
    .replace(/[\s_-]+/g, replace)
    .replace(/^-+|-+$/g, '');
}

export function handleGoal(id) {
  if (!id) return false;
  let val = 0;
  if (typeof window === 'undefined' || typeof window.fathom === 'undefined') {
    return;
  }

  if (typeof fathom === 'object') {
    window.fathom.trackGoal(id, val);
  } else {
    window.fathom('trackGoal', id, val);
  }
}
