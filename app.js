// class Student {
//   constructor(name,surname,rating){
//     this.name = name;
//     this.surname = surname;
//     this.rating = rating;
//     Student.group.push(this);
//   }
// }
let Student = function(name ='',surname = '',rating = []){
    this.name = name;
    this.surname = surname;
    this.rating = rating;
    Student.group.push(this);
  }
  
  Student.group = [];
  
  //=====Create prototype Object
  const firstStudent = new Student('Alex','Marmushka',[2,3,4,5]);
  const secondStudent = new Student('Bill','Kaput',[4,4,4,5]);
  const thirdStudent = new Student('Misho','Derot',[5,5,4,5]);
  //=====Create prototype Object
  
  //full name ============
  Student.prototype.fullName  = function(name,surname){
     return `${this.name}  ${this.surname}`;
  }
  //full name ============
  //==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // avarage =============
  Student.prototype.avarage = function(rating){
    return this.rating.reduce((sum,element) => (sum+=element)) / this.rating.length
  }
  // avarage =============
  
  //==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //showAllStudent ==========
  Student.prototype.showAllStudent = function(){
    return Student.group.map((item,key) => {
      const sorted = Student.group.sort((a,b) => {
        return a.avarage() - b.avarage();
      })
      const current = sorted[key];
      return `<tr><td>${key}</td><td>${current.fullName()}</td><td>${current.avarage()}</td></tr>`
    }).join('');
  }
  
  //showAllStudent ==========
  //==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //ShowBestStudent =========
  Student.prototype.ShowBestStudent = function(){
    let max = 0;
    let nameBestStudent;
      Student.group.forEach(function(item,i){
        if(max < Student.group[i].avarage()){
          //console.log(Student.group[i].avarage());
          max = Student.group[i].avarage();
          nameBestStudent = Student.group[i].fullName();
          //console.log('work'+max);
        }
      });
     return `${nameBestStudent} кращий студент курсу с балом ${max}`;
  }
  
  //==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  //bestStudent============================
  Student.prototype.bestStudent = function(){
    let bestObgect = 0;
     Student.group.forEach(function(item,i){
       if(bestObgect < Student.group[i].avarage()){
         // console.log(Student.group[i].avarage());
          bestObgect = Student.group[i];
       }
       });
    console.log(bestObgect);
  };
  
  //console.log(Student.group);
  
  //console.log(Student.group);
  console.clear();
   const table = document.querySelector('.table');
   table.innerHTML = Student.prototype.showAllStudent();
  const best = document.querySelector('#best');
  best.innerHTML = Student.prototype.ShowBestStudent();