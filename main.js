var films =
    ["Władca much (1990)", "Władca Pierścieni (1978)", "Milczenie owiec (1991)", "Moja dziewczyna (1991)", "Dziewczyna z tatuażem (2011)", "Jestem Bogiem (2011)", "Jestem legendą (2007)", "Matrix (1999)", "Zielona mila (1999)", "8 Mila (2002)", "Uciekająca panna młoda (1999)", "Gnijąca panna młoda (2005)", "Dzień świra (2002)", "Dzień Niepodległości (1996)", "Dzień świstaka (1993)", "Lista Schindlera (1993)", "Czarna lista Hollywood (1991)", "Lista klientów (2012)", "Teraz albo nigdy (2018)", "Niech będzie teraz (2012)", "Zabójcze maszyny (2018)", "Zabójcza broń (1987)", "Znaki (2002)", "Znaki na drodze (1969)", "Wodne znaki (2013)", "Znaki dymne (1998)", "Jeden dzień (2011)", "Dzień próby (2001)", "Dzień z życia blondynki (2014)", "Panna Nikt (1996)", "Panna Meadows (2014)", "Panna Nikt (2010)", "Panna Julia (1951)"]

// tworze liste obiektow z wartosciami tytul oraz rok


var filmsData = [];
var uniqueWords = [];
for (let i = 0; i < films.length; i++) {
    filmsData.push(
        {
            tytul: films[i].slice(0, films[i].length - 7),
            rok: films[i].slice(films[i].length - 5, films[i].length - 1)
        }
    );

}
console.log(filmsData)
// tworze jeden div w ktorym umieszczam zarowno tytul jak i rok , 


for (let i = 0; i < filmsData.length; i++) {
    let out = document.getElementById("out");
    let div2 = document.createElement("div");

    
    out.appendChild(div2).innerHTML = `<p class="tytul">${filmsData[i].tytul}</p><p class='rok'>${filmsData[i].rok}</p>`
    

    if ([i] % 2 == 0) {

        div2.className = "nieparzysty"
    }

    else {

        div2.className = "parzysty"
    }
}

//funkcja map na obiektach - sortuje tylko jedna wartosc x.rok
//  ARRAY OF OBJECTs

 
let select = document.createElement('select');
// nadaje select jego id 
select.id="select"
// funkcja pokazuje jaka wartosc klikam ---- select options selected index 
// oznaczam boxes jako elementy class zarowno parzysty jak i nieparzysty - querySelectorAll ('.parzysty, .nieparzysty')
// wyrazam zmienna year - jest to childnodes jako drugi tekst w moim div , badam czy moj year jest tożsamy z selectedvalue - ale to textcontent 
// nastepnie wyznaczam style display - czy jest to block, czy none  


select.onchange = function getSelectValue(){
   console.log(select.value)
    var  selectedValue = select.options[select.selectedIndex].textContent
    console.log(selectedValue);
    let counter=0;
    var boxes= document.querySelectorAll('.parzysty, .nieparzysty');
console.log(boxes);
    for (let i=0; i<boxes.length; i++){
        var year= boxes[i].querySelector('.rok').textContent;
        if(year == selectedValue){
            boxes[i].style.display = 'block';
            counter += 1;
    
        }
        else{
            boxes[i].style.display = 'none';
        }
    }
    widoczne.innerHTML = "Liczba widocznych filmów to: " + `${counter}`;
    
}

// wszystkie kafelki sa wyswietlane rownoczesnie, ustalam widoczne - jako default, po kliknieciu select oraz wartosci moja wartosc sie zmieni poniewaz jest to w ciele funkcji 
 wszystkie.textContent="Liczba wszystkich filmów to:" + ` ${filmsData.length} `;
 widoczne.textContent="Liczba widocznych filmów to:" + ` ${filmsData.length}`;





document.body.appendChild(select);

// Na podstawie nazw filmów stwórz tzw. chmurę tagów, czyli listę wszystkich słów występujących w liście filmów. Zadbaj, aby dane słowo nie występowało kilka razy na liście (wielkie i małe znaki traktuj jednakowo). Słowa uporządkuj alfabetycznie.





// funkcja przyjmuje 1 liczbe calkowita
// i zwraca string w stylu: "8px" (czyli wielkosc fontu)
function zmienFont(liczba){
    
    if(liczba == 1){
        return "8px"
    } else if(liczba ==2){
        return "12px"
    } else if(liczba ==3){
        return "16px"
    } else if(liczba ==4){
        return "20px"
    } else if(liczba >= 5){
        return "24px"
    }

}





 
// tworze div w ktorym umieszcze moje tags,nadaje mu id = "tags", przeiterowuje przez tablice oraz wkladam kazdy wyraz w osobny div, aby zrealizowac kolejne punkty instrukcji , tags jest appendchild w div3 





// 7.W dokumencie znajduje się przełącznik (odpowiednio ostylowany element) pozwalający na włączenie "trybu nocnego". Domyślnym trybem jest tryb dzienny (elementy mają jasne tło). Włączenie trybu nocnego zmienia wyświetlanie elementów (ciemne tło). POnownie kliknięcie przełącznika przywróci tryb dzienny.

var btn = document.createElement("BUTTON");
  btn.innerHTML = "TRYB";
  document.body.appendChild(btn);
  

  btn.onclick = function(toggle){
      console.log('kliknelam')
      var element = document.body;
      element.classList.toggle("dark-mode")
  }

//   Dwa przyciski pozwalające na sortowanie filmów - alfabetycznie oraz po roku premiery. Spróbuj pozwolić na sortowanie rosnąco (po pierwszym naciśnięciu przycisku) i malejąco (po drugim naciśnięciu przycisku).




var btn1=document.createElement("button");
btn1.innerHTML ="Sortuj alfabetycznie";
document.body.appendChild(btn1);
btn1.id="az";


// nasłuchuję kliknięcie, nazwa funkcji

    document.getElementById("az").addEventListener("click", SortNameDivs, false);
	var sort_meth = {
	  state: "desc"
	}

	function SortNameDivs(){
		var toSort = document.getElementById('out').children;
        console.log(toSort);
        
        // toSort will be a NodeList. You have to transform it to an array:
		let toSort2 = Array.prototype.slice.call(toSort, 0); 
        console.log(toSort2);
        
        // and then you can pass a callback to the sort method:
        // sortuje dziele tablice od pierwszej literki 
        // przy sortowaniu lat - 4 cyfry od konca 
		
		toSort2.sort(function(a, b) {
			var aord = a.innerText.split(' ')[0];
			var bord = b.innerText.split(' ')[0];
			console.log(aord + " " + bord);
			if(sort_meth.state == 'desc'){
				return (aord > bord) ? 1 : -1;
			}else{  
				return (aord < bord) ? 1 : -1; 
			} 
		});

		if(sort_meth.state == 'asc'){
			sort_meth.state = 'desc';
		}else{  
			sort_meth.state = 'asc';
		}
		
		
		var parent = document.getElementById('out');
		parent.innerHTML = "";

		for(var i = 0, l = toSort2.length; i < l; i++) {
			parent.appendChild(toSort2[i]);
		}
	}

   



var btn2=document.createElement("button");
btn2.innerHTML ="Sortuj według lat";
document.body.appendChild(btn2);
btn2.id="numeracja";

document.getElementById("numeracja").addEventListener("click", SortNumDivs, false);


	function SortNumDivs(){
		var toSort = document.getElementById('out').children;
        console.log(toSort);
        
        // toSort will be a NodeList. You have to transform it to an array:
		let toSort2 = Array.prototype.slice.call(toSort, 0); 
        console.log(toSort2);
        
        // and then you can pass a callback to the sort method:
        // sortuje dziele tablice od pierwszej literki 
        // przy sortowaniu lat - 4 cyfry od konca metoda slice 4 characters from the end
        
		
		toSort2.sort(function(a, b) {
			var aord = a.innerText.slice(-4);
			var bord = b.innerText.slice(-4);
			
			if(sort_meth.state == 'desc'){
				return (aord > bord) ? 1 : -1;
			}else{  
				return (aord < bord) ? 1 : -1; 
			} 
		});

		if(sort_meth.state == 'asc'){
			sort_meth.state = 'desc';
		}else{  
			sort_meth.state = 'asc';
		}
		
		
		var parent = document.getElementById('out');
		parent.innerHTML = "";

		for(var i = 0, l = toSort2.length; i < l; i++) {
			parent.appendChild(toSort2[i]);
		}
	}

   


// Stwórz formularz z dwoma polami (rok i nazwa filmu) umożliwiającymi dodanie nowego filmu i dodanie do go obecnej listy filmów. Formularz powinien mieć walidacje uniemożliwiającą wysłanie pustego formularza oraz komunikat po poprawnym dodaniu filmu do listy. Po dodaniu filmu sekcja wyświetlająca liczbę filmów powinna zostać zaktualizowana. Upewnij się że wszystkie funkcjonalności działają również dla nowo dodanego filmu.



var form = document.forms["form-film"]
var counterdiv = 0;
document.getElementById("form").onsubmit = function () {
    
    var div = document.getElementById("out")
    var div1=document.createElement("div")
    div.appendChild(div1)
    
    if (counterdiv % 2 === 0) {
      div1.className = "parzysty";
    } else {
      div1.className = "nieparzysty";
    }
    counterdiv++;
    wszystkie.textContent="Liczba wszystkich filmów to:" + ` ${filmsData.length}`;
    widoczne.textContent="Liczba widocznych filmów to:" + ` ${filmsData.length}`;

    
    var p1 = document.createElement("p")
    div1.appendChild(p1)
    p1.className="tytul"
    p1.innerHTML = this.tytuł.value 
    var p2=document.createElement("p")
    div1.append(p2)
    p2.className="rok"
    p2.innerHTML = this.rok.value
    alert("Dziękujemy za dodanie filmu do listy.")
    return false
    
}

function reloadTags() {
  let tags = document.getElementById("tags");
   tags.innerHTML = "";

  var words =[];

  for(let i=0; i<filmsData.length; i++){
    let wyrazy= filmsData[i].tytul.toLowerCase().split(" ");
    console.log(wyrazy)
    words.push(...wyrazy)
  }

  
  


  words.sort();
  console.log(words)

  uniqueWords=[... new Set(words)]
  console.log(uniqueWords)


  function ileRazy(wyraz){
    let counter=0
    for (let i=0; i<words.length;++i){
        if(words[i]===wyraz){
            counter++
        }
    }
    return counter
  }
  console.log(ileRazy("dzień"));
  for (let i = 0; i < uniqueWords.length; i++) {
    let tags = document.getElementById("tags");
    let div3 = document.createElement("div");
    tags.appendChild(div3).innerHTML = `${uniqueWords[i]} `; 
    div3.style.fontSize = zmienFont(ileRazy(uniqueWords[i]));
    div3.className="tag"
    
}

// Kliknięcie w tag powoduje odfiltrowanie filmów - wyświetlone zostaną tylko te, których tytuł zawiera wskazane słowo (pamiętaj o aktualizacji napisu wyświetlającego liczbę widocznych filmów). Dodaj również specjalny tag "wszystkie" w celu wyświetlenia wszystkich filmów.


let div3 = document.createElement("div");



tags.appendChild(div3).innerHTML = `<tag id="specyficzny">${"wszystkie"}`


document.getElementById("specyficzny").onclick = function(e){
    // Zapobiec takiemu działaniu można wywołując e.stopPropagation(), gdzie "e" jest parametrem metody obsługującej zdarzenie (albo w postaci function(e){...}, albo e=>{...}). Wówczas operację wykona tylko kliknięty tag "specyficzny", a kontener tagów nie będzie miał już szansy na to zareagować.
    
    var boxes=document.querySelectorAll('.parzysty, .nieparzysty');
    let counter = 0;
    for (let i=0; i<boxes.length; i++){


        boxes[i].style.display = "block"
        counter +=1
      
            e.stopPropagation();
    }
    widoczne.innerHTML = "Liczba widocznych filmów to: " +`${counter}`;
}


    


    tags.onclick = e => {
        var boxes=document.querySelectorAll('.parzysty, .nieparzysty');
        let counter=0;
        
        console.log(e.target.innerText)
          for (let i=0; i<boxes.length; i++){
          var tytul= boxes[i].querySelector('.tytul').textContent;
          
    let to = tytul.toLowerCase().split(" ").includes(e.target.innerText)

    console.log(to)
    if (to){
        boxes[i].style.display = 'block';
        counter+=1
    
    }
    else{
        boxes[i].style.display = 'none'
    }
          }
          widoczne.innerHTML = "Liczba widocznych filmów to: " + `${counter}`;
        }



       
}

function reloadSelect() {
  // czyszczenie obecnej listy 
  select.innerHTML = "";
  let distinctYears = [... new Set(filmsData.map(x=>x.rok))]
  // distinctYears;
  console.log(distinctYears);
  // lista sortuje wyniki - lata od najmnniejszego do najwiekszego 
  distinctYears.sort(function (a, b) {
   
    return (a) - (b);
      
  });
  console.log(distinctYears)
  //  wypełniam liste select wartosciami z tablicy distinctyears 
  for (let i=0; i<distinctYears.length; i += 1){
    const option = document.createElement('option');
    option.value = distinctYears[i];
    option.textContent = distinctYears[i];
    select.appendChild(option);
  }
  
}

function pushData (){
        
        
    var inputTytul = document.getElementById('inputTytul').value
    var inputRok = document.getElementById('inputRok').value
    films.push(inputTytul + " (" + inputRok +")");
    filmsData.push({
      rok: inputRok,
      tytul: inputTytul
      
    });
    
    reloadSelect();
    reloadTags();
    
   
    console.log(films)
    
}

reloadSelect();
reloadTags();


 