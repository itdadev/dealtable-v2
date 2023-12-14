export function returnNull(data) {
  if (data !== "" || data) {
    return data.replaceAll(",", "");
  }

  return null;
}

export function formatWon(e) {
  let price = e.target.value;

  price = Number(price.replaceAll(",", ""));

  if (isNaN(price)) {
    price = 0;
  } else {
    price = price?.toLocaleString("ko-KR");
  }

  e.target.value = price;
}

export function addComma(price) {
  return price?.toLocaleString("ko-KR");
}
