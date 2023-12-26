export function returnNull(data) {
  if (data !== "" || data) {
    return data.replaceAll(",", "");
  }

  return null;
}

export function formatWon(e) {
  let price = e.target.value;

  price = price.replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  e.target.value = price;
}

export function addComma(price) {
  return price?.toLocaleString();
}
