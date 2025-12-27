export function filterCards(cards: any[], query?: string): any[] {
  const q = String(query || '').trim().toLowerCase();
  if (!q) return cards;
  return cards.filter((card) => {
    const title = String(card?.title ?? '').toLowerCase();
    const price = String(card?.price ?? '').toLowerCase();
    return (
      title.includes(q) ||
      price.includes(q) 
     );
  });
}

export default filterCards;
