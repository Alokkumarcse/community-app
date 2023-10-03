// decorator function
function uppercaseDecorator(target, methodName, description) {
  // Store the original method
  const originalMethod = description.value;

  // Replace with new function
  description.value = function (...args) {
    // call the original method
    const result = originalMethod.apply(this, args);
    if (typeof result === "string") {
      return result.toUpperCase();
    } else {
      return result;
    }
  };
  return description;
}

// class definition with decorator
class TextFormatter {
  @uppercaseDecorator()
  formate(text) {
    return text;
  }
}

// create instance of class
const formatter = new TextFormatter();

console.log(formatter.formate("alok kumar"));
