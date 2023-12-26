export function returnNull(data) {
  if (data !== "" || data) {
    return data.replaceAll(",", "");
  }

  return null;
}

const formattedWon = (price) => {
  if (!!price && typeof price === "number") {
    return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (!!price && typeof price === "string") {
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  if (price === undefined) {
    return null;
  }

  return String(price);
};

const numberInputRex = (data) => {
  return data.split(".").length > 2
    ? data.slice(0, data.lastIndexOf("."))
    : data;
};

export function formatWon(e) {
  const result = numberInputRex(
    e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/^\d*[.]\d{2}$/g, e.target.value.slice(0, -1)),
  );

  const numbered = Number(result);

  const floored = Math.floor(numbered * 100) / 100;

  const final = formattedWon(floored.toString());

  e.target.value = final;
}

export function addComma(price) {
  return price?.toLocaleString();
}
