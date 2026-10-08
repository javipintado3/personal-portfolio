/**
 * Tiempo transcurrido desde una fecha hasta hoy, escrito como en el resto del
 * portfolio: "1 año 1 mes", "8 meses", "menos de 1 mes".
 *
 * Se usa en los puestos en curso para que la duración no se quede
 * desactualizada: la fecha de inicio es lo único que hay que escribir.
 */
export const formatDuration = (since: string, now: Date = new Date()): string => {
  const start = new Date(since);
  let months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  if (now.getDate() < start.getDate()) months -= 1;

  if (months < 1) return 'menos de 1 mes';

  const years = Math.floor(months / 12);
  const restMonths = months % 12;

  const yearsText = years > 0 ? `${years} ${years === 1 ? 'año' : 'años'}` : '';
  const monthsText = restMonths > 0 ? `${restMonths} ${restMonths === 1 ? 'mes' : 'meses'}` : '';

  return [yearsText, monthsText].filter(Boolean).join(' ');
};
