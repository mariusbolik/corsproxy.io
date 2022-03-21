function openInNewTab(href) {
  Object.assign(document.createElement('a'), {
    target: '_blank',
    href: href,
  }).click();
}

function validateUrl(value) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

function openUrl() {
  var input = document.getElementsByTagName('input')[0].value;
  console.log('INPUT', input);

  if (!input) {
    input = 'https://jsonplaceholder.typicode.com/todos/1';
  }
  var redirectWindow = window.open(
    'https://corsproxy.io/?' + encodeURIComponent(input),
    '_blank'
  );
  redirectWindow.location;
}

function footerYear() {
  document.getElementById('year').innerText = new Date().getFullYear();
}

function inputListener() {
  var input = document.getElementById('domain-input');
  input.addEventListener('input', function (event) {
    var errorMessageElement = document.getElementsByClassName('error-message')[0];
    var previewButton = document.getElementById('preview-button');
    if (event.target.value) {
      if (validateUrl(event.target.value)) {
        // console.log('Valid url');
        errorMessageElement.style.opacity = 0;
        previewButton.style.pointerEvents = 'auto';
        previewButton.style.opacity = '1';
      } else {
        // console.log('No valid url');
        errorMessageElement.style.opacity = 1;
        previewButton.style.pointerEvents = 'none';
        previewButton.style.opacity = '0.6';
      }
    } else {
      errorMessageElement.style.opacity = 0;
    }

    var apiLink = '';
    if (event.target.value) {
      apiLink = event.target.value;
    } else {
      apiLink = 'https://api.domain.com/...';
    }
    document.getElementById('code-example').innerText =
      "const url = 'https://corsproxy.io/?' + encodeURIComponent('" +
      apiLink +
      "');";
  });
}

document.addEventListener('DOMContentLoaded', function () {
  footerYear();
  inputListener();
});
