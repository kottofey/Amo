import '../scss/style.scss';

// eslint-disable-next-line max-len
const ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjZjNGJjYTMzZGU3MTY3NmI0NjA1ODJlNzJiYTY0MjE1NmNiMGUzZmEzNzIyNWMxNTg5OThiYWEwYjhmNzMyM2UwZGViYzczYjI4YTE1M2UzIn0.eyJhdWQiOiI3YjQ5MGYxOC0yYmU1LTRhNTUtYTc0ZS0xOTYzYzk2NDFiOTgiLCJqdGkiOiI2YzRiY2EzM2RlNzE2NzZiNDYwNTgyZTcyYmE2NDIxNTZjYjBlM2ZhMzcyMjVjMTU4OTk4YmFhMGI4ZjczMjNlMGRlYmM3M2IyOGExNTNlMyIsImlhdCI6MTcyNjM1NTM4MiwibmJmIjoxNzI2MzU1MzgyLCJleHAiOjE3MjYzNTc3ODIsInN1YiI6IjEwMzQ0MzIyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjAsImJhc2VfZG9tYWluIjpudWxsLCJ2ZXJzaW9uIjoxLCJzY29wZXMiOlsiY2hhdHMiLCJjcm0iLCJtYWlsIiwibm90aWZpY2F0aW9ucyIsInVuc29ydGVkIl0sImhhc2hfdXVpZCI6ImQ4ZWUxNjBiLTQwODItNDdhZi1iZmVmLTcxMjFjZGRjMWY4OCJ9.NLtMkqxB__35XqJCTn18wiSQIk2vIUfGbRYJb44JPw3Rut0aQExC3pOdT2EFPRA-rbIhispV2y3Pw6MT5trenpke8b0h4nklx5iQIs2Fgkf98-tGGyd46ThPthak14G-RZO1NJvNGxoCtpG5w5p-uji0kx0bexCdGtaQRDEi3h1J-gBf7p16j8q5QuNFQRwVVInYXMhMCD2NN79VdGhaEyyvdKh3ygBzN7jBWG04amyGMEXmIseKoMLgpXtIE45wGk8E8qjzcO9oiDKFL5Ab8zoHAmerJHU4UL_EhBFmNp227R9i9Kne2YIfc6Dtblgf9-WmDZZhOECWrSTE0gBHJg';

const fakeResponse = {
  id: 49732177,
  name: 'ООО  ЮНИК ФАРМАСЬЮТИКАЛ ЛАБОРАТОРИЗ / JBCPL /Good people / UNIQUE PHARMACEUTICAL',
  price: 0,
  responsible_user_id: 10344322,
  group_id: 0,
  status_id: 69415610,
  pipeline_id: 6946194,
  loss_reason_id: null,
  created_by: 9762838,
  updated_by: 0,
  created_at: 1351064229,
  updated_at: 1726340821,
  closed_at: null,
  closest_task_at: null,
  is_deleted: false,
  custom_fields_values: null,
  score: null,
  account_id: 31138334,
  labor_cost: null,
  _links: {
    self: {
      href: 'https://vitamaxima.amocrm.ru/api/v4/leads/49732177?page=1&limit=250',
    },
  },
  _embedded: {
    tags: [],
    companies: [
      {
        id: 45704595,
        _links: {
          self: {
            href: 'https://vitamaxima.amocrm.ru/api/v4/companies/45704595?page=1&limit=250',
          },
        },
      },
    ],
  },
};

const link = document.querySelector('.input__link');
const leadName = document.querySelector('.input__lead-name');
const date = document.querySelector('.input__date');
const button = document.querySelector('.input__button');
const status = document.querySelector('.input__status');

const debounce = (fn, debounceTime) => {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, debounceTime);
  };
};

function getLead (event) {
  // let link = new URL(event.target.value);
  //
  // const leadNumber = link.href.substring((link.href.lastIndexOf('/') + 1));
  // const request = new URL(`https://vitamaxima.amocrm.ru/api/v4/leads/${leadNumber}`);

  // const lead = fetch(request, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${ACCESS_TOKEN}`,
  //   },
  //   mode: 'cors',
  //   credentials: 'include',
  //   // referrerPolicy: 'no-referrer',
  // }).then(response => response.json());
  // console.log(fakeResponse);

  leadName.textContent = fakeResponse.name;
  return fakeResponse;
}

function changeLeadDate (event) {
  if (!link.value) {
    console.log('Nothing to change');
  } else {
    fakeResponse.created_at = Date.parse(date.value) / 1000;
    const newDate = new Date(fakeResponse.created_at * 1000);

    status.textContent = newDate.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  }
}

const getLeadDebounced = debounce(getLead, 500);

link.addEventListener('input', getLeadDebounced);
button.addEventListener('click', changeLeadDate);
