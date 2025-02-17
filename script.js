function add_new_work_exp() {
    let n=document.createElement('textarea');
    n.classList.add('form-control');
    n.classList.add('workex');
    n.classList.add("mt-2");
    n.setAttribute("placeholder","Enter here")
    

    let weOb = document.getElementById("we");
    let work_exOb = document.getElementById("work-exp");

    weOb.insertBefore(n,work_exOb);

}


function add_new_qual() {
    let n=document.createElement('textarea');
    n.classList.add('form-control');
    n.classList.add('qual');
    n.classList.add("mt-2");
    n.setAttribute("placeholder","Enter here")
    

    let aqOb = document.getElementById("academic");
    let academic_qualOb = document.getElementById("academic-qual");

    aqOb.insertBefore(n,academic_qualOb);
}


function GenerateCV() {
    
    window.open("CV.html", "_blank");
    
    let fname = document.getElementById('name').value;
    let email = document.getElementById('mail').value;
    let ph = document.getElementById('ph').value;
    let link = document.getElementById('link').value;
    let nation = document.getElementById('nation').value;
    let dob = document.getElementById('dob').value;
    let add = document.getElementById('add').value;
    let obj = document.getElementById('objective').value;

    let wx = document.getElementsByClassName('workex');

    let str="";
    for(let e of wx){
        str = str + `<li> ${e.value} </li>`;
    }

    let aq = document.getElementsByClassName('qual');

    let str2=" ";
    for(let e of aq){
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    localStorage.setItem("academic_qualification", str2);

    localStorage.setItem("work_experience", str);

    localStorage.setItem("cv_name", fname);
    localStorage.setItem("cv_email", email);
    localStorage.setItem("cv_phone", ph);
    localStorage.setItem("cv_linkedin", link);
    localStorage.setItem("cv_nationality", nation);
    localStorage.setItem("cv_dob", dob);
    localStorage.setItem("cv_address", add);
    localStorage.setItem("cv_objective", obj);
}