const myApp = angular.module('myApp', []);
// пустой массив для создания нового модуля myApp (не просто получение)
myApp.controller('studController', function($scope, $http) {
	$http({method: 'GET', url: './index.json'})
		.then(function(data, status) {
			$scope.students = data.data;
		});
		$scope.checkForms = {};
		$scope.buttonDelete = function () {
			//
			console.log($scope.checkForms);
		}
			// let checkForms = document.querySelectorAll('input');
// $scope.checkAll = function(mainCheckbox) {
// 		console.log(mainCheckbox);
// 		// let checkForms = document.querySelectorAll('input');
		// // по циклу каждому элементу выдется значение mainCheckbox
		// for (let checkForm of checkForms) {
		// 	checkForm.checked = mainCheckbox.checked;
		// }

	// $scope.buttonDelete = function () {
	// 	// если чекбоксы отмечены
	// 	for (let i = 0; i < checkForms.length; i++) {
	// 		if(checkForms[i].checked) {
	// 		// происходит их удаление
	// 			checkForms[i].parentNode.remove();
	// 		}
	// 	}		
	// };
//	$scope.mainCheckbox = false;
});
 



// fetch('./index.json')
// 	.then(function(response) {
// 		return response.json();
// 	}).then(json => {
// 		studentData = json;
// 		let ol = document.createElement('ol');
// 		let buttonDelete = document.createElement('input');
// 		buttonDelete.type = "button"; 
// 		buttonDelete.name = "DELETE";
// 		buttonDelete.value = "DELETE";
// 		document.body.appendChild(buttonDelete);
// 		buttonDelete.classList.add('buttonDelete');
// //Создана и добавлена кнопка делит
// 		let div = document.getElementById('wrap');
// 		wrap.classList.add('wrap');
// //Создана и добавлена обертка к списку

// 		for (let i = 1; i <= Object.keys(studentData).length; i++) {
// 			// let li = document.createElement('li');
// 			let checkbox = document.createElement('input');

// 			checkbox.type = "checkbox";
// 			checkbox.id = "checkbox"+i; 
// 			checkbox.name = "name"+i; 
// 			checkbox.classList.add('checkbox');
// 			//debugger;
// 			div.appendChild(ol);

// 			ol.appendChild(li);
// 			li.innerHTML = `<label for=checkbox${i}> ${studentData[i]} </label>`;

// 			li.appendChild(checkbox);
// 			}
// //произошел цикл, добавив список на страницу
// 			let checkboxes = document.getElementsByClassName('checkbox');

// 			buttonDelete.onclick = function () {
// 			// если чекбоксы отмечены
// 				for (let i = 0; i < checkboxes.length; i++) {
// 					if(checkboxes[i].checked) {
// 	// происходит их удаление
// 						checkboxes[i].parentNode.style.display = "none"; 
// 					}
// 				}		
// 			}
			

// 	});




// // 1. @TODO: ф-ция для генерации html списка
// // принимает массив юзеров в качестве аргумента и добавляет <li> элементы с текстом в список
// // <div class="line" id="studentOne"></div>
// //<ul> {here goes list items} </ul>

// // 3. и навешивает обработчик нажаития на кнопку Удалить, которое 
// // удалит элемент из массива и вызовет повторную генерацию списка
