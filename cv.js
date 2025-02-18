document.addEventListener("DOMContentLoaded", function () {
    // Retrieve data from localStorage
    document.getElementById("cv-name").innerText = localStorage.getItem("cv_name") || "Not provided";
    document.getElementById("cv-email").innerText = localStorage.getItem("cv_email") || "Not provided";
    document.getElementById("cv-phone").innerText = localStorage.getItem("cv_phone") || "Not provided";
    document.getElementById("cv-linkedin").innerHTML = `<a href="${localStorage.getItem("cv_linkedin")}" target="_blank">LinkedIn</a>` || "Not provided";
    document.getElementById("cv-nationality").innerText = localStorage.getItem("cv_nationality") || "Not provided";
    document.getElementById("cv-dob").innerText = localStorage.getItem("cv_dob") || "Not provided";
    document.getElementById("cv-address").innerText = localStorage.getItem("cv_address") || "Not provided";
    document.getElementById("cv-objective").innerText = localStorage.getItem("cv_objective") || "Not provided";
    document.getElementById("cv-work-experience").innerHTML = localStorage.getItem("work_experience") || "Not provided";
    document.getElementById("cv-academic-qualification").innerHTML = localStorage.getItem("academic_qualification") || "Not provided";

    document.getElementById("cv-name").innerText = localStorage.getItem("head_name") || "Not provided";

    });


    function printCV() {
        const cvElement = document.getElementById('cv'); // The section to convert to PDF
        html2pdf().from(cvElement).save('My_CV.pdf');
    }
