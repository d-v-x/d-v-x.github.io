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

];

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

