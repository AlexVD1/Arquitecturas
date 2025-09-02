  function toggleEditRow(taskId) {
    console.log("ID recibido:", taskId); // Debug
    const row = document.getElementById(taskId);
    console.log("Fila encontrada:", row); // Debug
    if (row.style.display === 'none' || row.style.display === '') {
      row.style.display = 'table-row';
    } else {
      row.style.display = 'none';
    }
  }

  function cancelEdit(taskId) {
    const row = document.getElementById(taskId);
    row.style.display = 'none';
  }

  function saveTask(taskId) {
    const title = document.getElementById('edit-title-' + taskId).value;
    const description = document.getElementById('edit-desc-' + taskId).value; 
    const status = document.getElementById('edit-status-' + taskId).value;
    const category = document.getElementById('edit-category-' + taskId).value;
    fetch('/tasks/' + taskId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, status, category })
    }).then(response => {
      if (response.ok) {
        location.reload(); // Recargar la página para ver los cambios
      } else {
        alert('Error updating task');
      }
    }).catch(error => {
      console.error('Error:', error);
      alert('Error updating task');
    });
  }

  async function addNewTask() {
    const title = document.getElementById('newTitle').value;
    const description = document.getElementById('newDescription').value; 
    const status = document.getElementById('newStatus').value;      
    const category = document.getElementById('newCategory').value;
    fetch('/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'    
      },
      body: JSON.stringify({ title, description, status, category })
    }).then(response => { 
      if (response.ok) {
        console.log('Task added reloading page');
        location.reload(); // Recargar la página para ver los cambios
      } else {
        alert('Error reloading page');
        console.log(response);
      }     
    }).catch(error => {
      console.error('Error:', error);
      alert('Error adding task');
    });
    return false; // Prevent form submission
  }

  function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
      fetch('/tasks/delete/' + taskId, {  
        method: 'POST'
      }).then(response => {
        if (response.ok) {        
          location.reload(); // Recargar la página para ver los cambios
        } else {
          alert('Error deleting task');
        } 
      }).catch(error => {     
        console.error('Error:', error);
        alert('Error deleting task');      });
    }   
    return false; // Prevent form submission
  }