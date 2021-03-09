'use strict'
function students (email,mobile,tuition) {
    this.email=email;
    this.mobile=mobile;
    this.tuition=tuition;
    this.name=email.substring(0, email.length - 9);
    this.age=get_random_age();
};

let students_data=[];

// constructor table

const main_section =document.getElementById('table_section');
const table =document.createElement('tb');
table.id="table1"
const row1=document.createElement('tr');

const head1=document.createElement('th');
const head2=document.createElement('th');
const head3=document.createElement('th');
const head4=document.createElement('th');
const head5=document.createElement('th');
const head6=document.createElement('th');


main_section.appendChild(table);
table.appendChild(row1);
row1.appendChild(head1);
row1.appendChild(head2);
row1.appendChild(head3);
row1.appendChild(head4);
row1.appendChild(head5);
row1.appendChild(head6);


head1.textContent="id";
head2.textContent="Name";
head3.textContent="Email";
head4.textContent="Mobile";
head5.textContent="Age";
head6.textContent="Tuition";



function add_item_in_table (name,email,mobile,age,tuition){
    const row1=document.createElement('tr');

const head1=document.createElement('th');
const head2=document.createElement('th');
const head3=document.createElement('th');
const head4=document.createElement('th');
const head5=document.createElement('th');
const head6=document.createElement('th');


main_section.appendChild(table);
table.appendChild(row1);
row1.appendChild(head1);
row1.appendChild(head2);
row1.appendChild(head3);
row1.appendChild(head4);
row1.appendChild(head5);
row1.appendChild(head6);


head1.textContent='****';
head2.textContent=name;
head3.textContent=email;
head4.textContent=mobile;
head5.textContent=age;
head6.textContent=tuition;
}


let pre_data=localStorage.getItem('array');
if(pre_data!=null){
for(let i=0;i<pre_data.length;i++){
    add_item_in_table(pre_data[i].name,pre_data[i].email,pre_data[i].mobile,pre_data[i].age,pre_data[i].tuition);
}
}

// get data

const email_input=document.getElementById('email');
const Mobile_input=document.getElementById('mobile');
const tuition_input=document.getElementById('inputs');

const button1=document.getElementById('button1');

button1.addEventListener('click', function(event){
    event.preventDefault;

    const email_text=email_input.value;
    const Mobile_text=Mobile_input.value;
    const tuition_text = tuition_input.value;

    students_data.push(new students (email_text,Mobile_text,tuition_text));
    localStorage.setItem('array',students_data);

    add_item_in_table(students_data[students_data.length-1].name,students_data[students_data.length-1].email,students_data[students_data.length-1].mobile,students_data[students_data.length-1].age,students_data[students_data.length-1].tuition);

    const total_text =document.getElementById('total_text');
    let total_value=0;
    for(let i=0;i<students_data.length;i++){
        if(students_data[i].tuition="100 JD"){
            total_value=total_value + 100;
        }
        if(students_data[i].tuition="500 JD"){
            total_value=total_value + 500;
        }
        if(students_data[i].tuition="1000 JD"){
            total_value=total_value + 1000;
        }
    }
    total_text.textContent="Total "+total_value;

});

// HELPER FUNCTION

function get_random_age() {
    return Math.round( Math.random()*(24-18)+18 )
}

function get_name(email){
    const email_length = email.length;
    return 'name';
};