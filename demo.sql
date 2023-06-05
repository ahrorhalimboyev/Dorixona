create table Pharmacies(
    id int not null auto_increment primary key,
    name varchar(100),
    address varchar(100),
    location varchar (100),
    phone varchar (100),
    email varchar(100),
    region_id int(11),
    district_id int(11)
);

insert into pharmacies
    (name, address, location, phone, email, region_id, district_id)
    VALUES
    ("Nova", "A.Navoiy, 1-uy", "Namangan", "998934551741", "nova@gamil.com", 1,2),
    ("Navbahor", "Beruniy, 182-a-uy", "Toshkent", "998975487895", "navbahor@gamil.com", 2,1),
    ("Semurg", "Maxtumquli, 45-uy", "Andijon", "998905583558", "semurg@gamil.com", 3,3);


create table Medicines(
    id int not null auto_increment primary key,
    name varchar(100),
    manufacturer varchar(100),
    medicine_type_id int (11),
    price int (11),
    expiry_date date,
    info text
);

insert into Madicines
    (name, manufacturer, medicine_type_id, price, expiry_date, info)
    VALUES
    ("Aspirin", "Shayana_Farm", 1, 5000, "2023-10-15", "Bosh og'rig'i uchun"),
    ("Qupen", "FarmStyle", 2, 55000, "2024-01-01", "Tomoq og'rig'i uchun"),
    ("Nolgripp", "ShaydoFarm", 3, 7000, "2023-12-10", "Grip uchun"),

create table Stock(
    id int not null auto_increment primary key,
    medicine_id int (11),
    pharmacy_id int (11),
    quantity int (11)
);



create table District(
    id int not null auto_increment primary key,
    name varchar(100),
    region_id int (11)
);

create table Region(
    id int primary key,
    name varchar(100)
);

create table Medicine_id(
    id int not null auto_increment primary key,
    name varchar(100)
);
