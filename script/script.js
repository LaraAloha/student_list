
fetch('./index.json')
	.then(function(response) {
		return response.json();
	}).then(json => {
		studentData = json;
		let ol = document.createElement('ol');

		for (i = 1; i <= Object.keys(studentData).length; i++) {
			let div = document.getElementById('wrap');

			debugger;
			let li = document.createElement('li');
			let checkbox = document.createElement('input');
			checkbox.type = "checkbox"; 
            checkbox.name = "name"+i; 
            // checkbox.value = "value"; 
            // checkbox.id = "id"; 



			div.appendChild(ol);
			ol.appendChild(li);
			li.innerHTML = studentData[i];

			li.appendChild(checkbox);
			
		}
	});




// 1. @TODO: ф-ция для генерации html списка
// принимает массив юзеров в качестве аргумента и добавляет <li> элементы с текстом в список
// <div class="line" id="studentOne"></div>
//<ul> {here goes list items} </ul>

// 3. и навешивает обработчик нажаития на кнопку Удалить, которое 
// удалит элемент из массива и вызовет повторную генерацию списка
