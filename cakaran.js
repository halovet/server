const imageRegex = /\.(jpeg|jpg|gif|png|http|https)$/i;

function validateImageURL(url) {
  return imageRegex.test(url);
}
const imageUrl = "http//.gambarlucu";
console.log(validateImageURL(imageUrl)); // Output: true
