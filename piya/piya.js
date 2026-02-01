function openTab(index) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    tabs[index].classList.add('active');
    contents[index].classList.add('active');
}

const itemsReading = [
    'man', 'min', 'mun',
    'nan', 'nin', 'nun',
    'tan', 'tin', 'tun',
    'lan', 'lin', 'lun',
    'dan', 'din', 'dun',
    'han', 'hin', 'hun',
    'kan', 'kin', 'kun',
    'ban', 'bin', 'bun',
    'san', 'sin', 'sun',
    'ran', 'rin', 'run',

    'mas', 'mis', 'mus',
    'nas', 'nis', 'nus',
    'tas', 'tis', 'tus',
    'las', 'lis', 'lus',
    'das', 'dis', 'dus',
    'has', 'his', 'hus',
    'kas', 'kis', 'kus',
    'bas', 'bis', 'bus',
    'sas', 'sis', 'sus',
    'ras', 'ris', 'rus',

    'mak', 'mik', 'muk',
    'nak', 'nik', 'nuk',
    'tak', 'tik', 'tuk',
    'lak', 'lik', 'luk',
    'dak', 'dik', 'duk',
    'hak', 'hik', 'huk',
    'kak', 'kik', 'kuk',
    'bak', 'bik', 'buk',
    'sak', 'sik', 'suk',
    'rak', 'rik', 'ruk',

    'mah', 'mih', 'muh',
    'nah', 'nih', 'nuh',
    'tah', 'tih', 'tuh',
    'lah', 'lih', 'luh',
    'dah', 'dih', 'duh',
    'hah', 'hih', 'huh',
    'kah', 'kih', 'kuh',
    'bah', 'bih', 'buh',
    'sah', 'sih', 'suh',
    'rah', 'rih', 'ruh',

    'mat', 'mit', 'mut',
    'nat', 'nit', 'nut',
    'tat', 'tit', 'tut',
    'lat', 'lit', 'lut',
    'dat', 'dit', 'dut',
    'hat', 'hit', 'hut',
    'kat', 'kit', 'kut',
    'bat', 'bit', 'but',
    'sat', 'sit', 'sut',
    'rat', 'rit', 'rut',

    'mal', 'mil', 'mul',
    'nal', 'nil', 'nul',
    'tal', 'til', 'tul',
    'lal', 'lil', 'lul',
    'dal', 'dil', 'dul',
    'hal', 'hil', 'hul',
    'kal', 'kil', 'kul',
    'bal', 'bil', 'bul',
    'sal', 'sil', 'sul',
    'ral', 'ril', 'rul',

    'mam', 'mim', 'mum',
    'nam', 'nim', 'num',
    'tam', 'tim', 'tum',
    'lam', 'lim', 'lum',
    'dam', 'dim', 'dum',
    'ham', 'him', 'hum',
    'kam', 'kim', 'kum',
    'bam', 'bim', 'bum',
    'sam', 'sim', 'sum',
    'ram', 'rim', 'rum',

    'tok', 'mok', 'lok',
    'tos', 'mos', 'los',
    'toh', 'moh', 'loh',
    'tot', 'mot', 'lot',
    'tek', 'mek', 'lek',
    'tes', 'mes', 'les',
    'teh', 'meh', 'leh',

];

const itemsIqra = [

    'اَ اَ',' بَ اَ','بَ  بَ','بَ  اَ','اَ  بَ',
    'تَ ثَ','ثَ تَ','تَ تَ','اَ ثَ','بَ تَ',
    'اَ اَ',' بَ اَ','بَ  بَ','بَ  اَ','اَ  بَ',
    'تَ ثَ','ثَ تَ','تَ تَ','اَ ثَ','بَ تَ',
    'جَ حَ','خَ حَ','حَ جَ','جَ حَ','حَ جَ'
]

const container = document.getElementById('reading');

itemsReading.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;

    div.addEventListener('click', () => {
        document.querySelectorAll('#reading div')
          .forEach(b => b.classList.remove('pressed'));
        div.classList.add('pressed');
      });

      document.getElementById('reading').appendChild(div);
});

itemsIqra.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;

    div.addEventListener('click', () => {
        document.querySelectorAll('#iqra div')
          .forEach(b => b.classList.remove('pressed'));
        div.classList.add('pressed');
      });

      document.getElementById('iqra').appendChild(div);
});

