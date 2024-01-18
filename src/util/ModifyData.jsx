export function returnNull(data) {
  if (data !== "" || data) {
    return data.replaceAll(",", "");
  }

  return null;
}

export function formatWon(e, setValue, name) {
  let value = e.target.value;

  console.log(isNaN(value));

  // 모든 문자 제거 후 숫자와 소수점만 허용
  value = value.replace(/[^\d.]/g, "");

  const decimalIndex = value.indexOf(".");

  if (decimalIndex !== -1) {
    // 소수점 이후 두 자리까지만 유지
    const decimalPart = value.substring(decimalIndex + 1);
    value = `${value.substring(0, decimalIndex + 1)}${decimalPart.slice(0, 2)}`;

    // // 소수점 이후 세 자리마다 콤마 추가
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  } else {
    // 콤마 추가
    value = value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  if (setValue) {
    setValue(name, value);
  }
}

export function addComma(price) {
  if (price) {
    return price?.toLocaleString();
  }

  return "";
}
