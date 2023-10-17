Task - 1:
Array-də(minimum 5 element olsun) cüt ədədlərlə tək ədədlərin fərqini tapan algorithmi qurun;
Task - 2:
Array-də(minimum 5 element olsun) 3 rəqəmli ədədlərlə digər ədədlər arasındakı fərqi tapan algorithmi qurun;



## Task 3

### Bərabər bölənlər

m natural ədədi n ədədinin o zaman bərabər böləni adlanır ki, n-nin m-ə bölünməsindən alınan tam və qalıq bərabər olsun. Verilmiş n natural ədədinə görə onun bərabər bölənlərinin sayını tapın.

### Input
Müsbət n tam ədədi (1 ≤ n ≤ 10**6).

### Output
Tələb olunan say.

#### Input example 1

    20


#### Output example 1

    2

---

## Task 4

### Simmetriya dərəcəsi

<img src="https://static.e-olymp.com/content/33/336c5993b57c1430557b158144fe11c7d4f6d250.gif"/&gt;

Natural ədədin onluq yazılışında rəqəmləri eyni olan və bu ədədin onluq yazılışının mərkəzinə nəzərən simmetrik yerləşən cütlüklərin sayını həmin ədədin simmetriya dərəcəsi adlandıracağıq. Əgər ədəddə hər hansı rəqəm onluq yazılışda ortada yerləşirsə, onu da özü ilə bir cütlük kimi saymaq lazımdır. n ədədinin simmetriya dərəcəsini tapın.

### Input
Giriş sətrində yeganə bir n (n < 2 ·10**9) natural ədədi verilir.


### Output
Çıxışa yeganə bir ədəd - n ədədinin simmetriya dərəcəsini verməli.

#### Input example 1

    123322



#### Output example 1

    2

---

## Task 3

### Final turuna keçənlər

Olimpiadanın yarımfinal turuna xoş gəlmisiniz! Olimpiadanın təşkilatçıları düşünür ki, bu turu müvəffəqiyyətlə keçmək üçün hər bir şagirdin qiymət ortalaması ən azı 3.5 və eyni zamanda informatika fənnindən qiyməti A və ya B olmalıdır. Lakin təşkilatçılar yanıla bilər, çünki siz hələ bu məsələni həll etməmisiniz. Məsələni həll edərək, hər bir şagirdin final turuna keçib-keçmədiyini müəyyən edən proqram yazın.



### Input
İlk sətirdə bir tam ədəd n (1 ≤ n ≤ 1000) - şagirdlərin sayı verilir. Sonrakı n sətrin hər birində boşluqla ayrılmış bir həqiqi ədəd xi (0.0 < xi ≤ 5.0) - i-ci şagirdin qiymət ortalaması və bir simvol yi (yi ϵ {A, B, C, D, E, F}) - həmin şagirdin informatika fənnindən aldığı qiymət verilir. Şagirdlər 1-dən n-ə nömrələnmişdir.


### Output
Hər bir şagird üçün bir sətirdə, əgər şagird turu müvəffəqiyyətlə keçirsə 1, əks halda 0 çap edin.

#### Input example 1

    2
    3.7 C
    4.0 B



#### Output example 1

    0
    1


#### Input example 2

    3
    3.5 B
    3.6 C
    2.5 A



#### Output example 2

    1
    0
    0

---

## Task 5

### İki massiv

İki massiv verilib. Birinci massivin o elementlərini çap edin ki, qiymətləri ikinci massivdə olmasın (elementlərin ardıcıllığı birinci massivdəki kimi çap edilməlidir).


### Input
Əvvəlcə birinci massivin elementlərinin n sayı və massivin elelemntləri verilir. Sonra ikinci massivin elementlərinin m sayı və elementləri verilir. Hər iki massivin elementlərinin sayı 100-ü aşmır. Bütün elelmentlər tam ədədlərdir.

### Output
İlk sətirdə cari elementlərin sayını, ikinci sətirdə isə birinci massivin ikinci massivdə olmayan elementlərini verilmiş ardıcıllıqda çap edin.

:clock2: Time limit 1 second

:floppy_disk: Memory limit 128 MiB

#### Input example 1
   
    3 1 3 4 2 4 12    
   
    4 15 43 1 15 1


#### Output example 1
       
      3 3 2 12

---

