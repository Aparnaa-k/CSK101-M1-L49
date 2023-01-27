const submitButton1 = document.getElementById('button1');
const commentContainer1 = document.getElementById('comment-container1');
var message1;

submitButton1.onclick = () => {
  let numberInput1 = document.getElementById('number-input1').value;

  // Challenge 1: Use if else condition to store the respective comments in the variable "message1" based on the score input.
  // when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
  let score = 'numberInput1';
  //Here are the values and their respective comments
  if (score <= 0 || score >= 100) {
    comment = 'This is not possible. An error has occurred.';
  }
  //Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
  else if (score >= 0 || score <= 19) {
    comment = 'That was a terrible score!';
  }
  //Score of 0 to 19 — “That was a terrible score!”
  else if (score >= 20 || score <= 39) {
    comment = 'You know some things. Needs improvement.';
  }
  //Score of 20 to 39 — “You know some things. Needs improvement.”
  else if (score >= 40 || score <= 69) {
    comment = 'You did a passable job, not bad!';
  }
  //Score of 40 to 69 — “You did a passable job, not bad!”
  else if (score >= 70 || score <= 89) {
    comment = 'That’s a great score. You really know your stuff.';
  }
  //Score of 70 to 89 — “That’s a great score. You really know your stuff.”
  else score >= 90 || score <= 100;
  {
    comment = 'What an amazing score!';
  }
  // Score of 90 to 100 — “What an amazing score!”

  commentContainer1.innerHTML = message1;
};

const submitButton2 = document.getElementById('button2');
const commentContainer2 = document.getElementById('comment-container2');
var message2;

submitButton2.onclick = () => {
  let numberInput2 = document.getElementById('number-input2').value;
  let score = numberInput2;
  // Challenge 2: Use Switch statements to store the respective comments in the variable "message2" based on the input.
  // when the user gives a number input and clicks on the submit button, the respective comments should be displayed.
  switch (true) {
    // Here are the values and their respective comments
    // Score of less than 0 or more than 100 — “This is not possible. An error has occurred.”
    case score >= 0 && score <= 19:
      message2 = 'That was a terrible score!';
      break;
    // Score of 0 to 19 — “That was a terrible score!”
    case score >= 20 && score <= 39:
      message2 = 'You know some things. Needs improvement.';
      break;
    // Score of 20 to 39 — “You know some things. Needs improvement.”
    case score >= 40 && score <= 69:
      message2 = 'You did a passable job, not bad!';
      break;
    // Score of 40 to 69 — “You did a passable job, not bad!”
    case score >= 70 && score <= 89:
      message2 = 'That’s a great score. You really know your stuff.';
      break;
    // Score of 70 to 89 — “That’s a great score. You really know your stuff.”
    case score >= 90 && score <= 100:
      message2 = 'What an amazing score!';
      break;
    // Score of 90 to 100 — “What an amazing score!”
    default:
      message2 = 'This is not possible. An error has occurred.';
  }
  commentContainer2.innerHTML = message2;
};
