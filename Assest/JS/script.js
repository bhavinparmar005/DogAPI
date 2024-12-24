async function getValue() {
  let selectValue = document.getElementById("select");

  let optionsValue = selectValue.value;
  console.log(optionsValue);

  try {
    let response = await fetch(`https://dog.ceo/api/breed/${optionsValue}/images/random`);
    let data = await response.json();

    let img = document.getElementById("img");
    img.src = data.message;

    //   console.log(optionsValue);
    console.log(data.message);
  } catch (error) {
    console.log(error);
  }
}
