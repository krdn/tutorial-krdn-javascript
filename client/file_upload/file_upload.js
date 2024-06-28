async function uploadFile() {
  const file = document.getElementById('file').files[0];
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/upload', {
    method: 'POST',
    body: formData,
  });

  const result = await response.json();
  console.log(result);
}