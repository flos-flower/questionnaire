import './styles/main.scss'

let burger = document.querySelector(".header__burger") as HTMLElement;
let menu = document.querySelector(".menu") as HTMLElement;
let navText = document.querySelector(".header__text") as HTMLElement;
let testsCol = document.querySelector(".tests") as HTMLElement;
let mainPage = document.querySelector("main") as HTMLElement;
let storedAnswers: { question: string, answer: string }[][];

interface Questionary {
    question: string;
    correctAnswer: string;
    answers: string[];
}

interface Test {
    name: string;
    description: string;
    questionary: Questionary[];
}

let showNav: boolean = false;
interface chosenTest {
    test: number;
    isChosen: boolean;
}
let testChosen: chosenTest = {
    test: 0,
    isChosen: false,
};

let tests: Test[] = [
    {
        name: "1st Test",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae turpis vitae nisi venenatis rutrum nec non odio. Fusce non dolor orci. Integer eget odio enim. Praesent sed auctor erat. Vestibulum fringilla suscipit dui id ultricies. Nunc pellentesque viverra neque sed rutrum. Nunc tristique risus.",
        questionary:
            [
                {
                    question: 'Question 1',
                    correctAnswer: 'Answer 2',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 2',
                    correctAnswer: 'Answer 3',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 3',
                    correctAnswer: 'Answer 1',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 4',
                    correctAnswer: 'Answer 5',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 5',
                    correctAnswer: 'Answer 6',
                    answers: [
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin odio sit amet.',
                        'Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet.',
                    ],
                },
            ]
    },
    {
        name: "2nd Test",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget vehicula diam, et luctus nulla. Etiam ultricies condimentum turpis quis volutpat. Sed semper nisi consequat auctor egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam porta, enim ac porta condimentum.",
        questionary:
            [
                {
                    question: 'Question 1',
                    correctAnswer: 'Answer 2',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 2',
                    correctAnswer: 'Answer 3',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 3',
                    correctAnswer: 'Answer 1',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 4',
                    correctAnswer: 'Answer 5',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 5',
                    correctAnswer: 'Answer 6',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
            ],
    },
    {
        name: "3rd Test",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia fermentum euismod. Vestibulum sollicitudin, erat vitae congue aliquam, urna sem aliquam felis, vitae aliquam quam orci sit amet justo. Etiam iaculis id tortor id euismod. Phasellus hendrerit felis nec sem dignissim consequat. Vivamus mattis hendrerit.",
        questionary:
            [
                {
                    question: 'Question 1',
                    correctAnswer: 'Answer 2',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 2',
                    correctAnswer: 'Answer 3',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 3',
                    correctAnswer: 'Answer 1',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 4',
                    correctAnswer: 'Answer 5',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 5',
                    correctAnswer: 'Answer 6',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
            ],
    },
    {
        name: "4th Test",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit lorem, consequat non lobortis vel, finibus vel turpis. Donec erat justo, accumsan id egestas et, condimentum quis dolor. Duis ligula massa, viverra id mattis id, pulvinar ac urna. Sed ornare mattis tortor ac maximus. Maecenas.",
        questionary:
            [
                {
                    question: 'Question 1',
                    correctAnswer: 'Answer 2',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 2',
                    correctAnswer: 'Answer 3',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 3',
                    correctAnswer: 'Answer 1',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 4',
                    correctAnswer: 'Answer 5',
                    answers: [
                        'Answer 1',
                        'Answer 2',
                        'Answer 3',
                        'Answer 4',
                        'Answer 5',
                        'Answer 6',
                    ],
                },
                {
                    question: 'Question 5',
                    correctAnswer: 'Answer 6',
                    answers: [
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin odio sit amet.',
                        'Lorem ipsum dolor sit amet, aliquam sollicitudin odio sit amet.',
                    ],
                },
            ],
    },
];

tests.forEach((test) => {
    testsCol.innerHTML += `<li class='tests__item'>${test.name}</li>`;
});

let testItem = document.querySelectorAll(
    ".tests__item"
) as NodeListOf<HTMLElement>;

let questionsDone = (radioBtns: NodeListOf<HTMLInputElement>): void => {
    let doneness = document.querySelector('.test-info__remain') as HTMLElement;
    let questions = document.querySelectorAll(
        ".test-start-quiz__question"
    ) as NodeListOf<HTMLInputElement>;
    let counter: number = 0;
    radioBtns.forEach(el => {
        if (el.checked === true) {
            counter++;
        }
    })
    doneness.innerHTML = `${counter}/${questions.length}`;
}

let cancelDesc = (): void => {
    let cancelBtn = document.querySelector(".desc__btn_white") as HTMLElement;

    cancelBtn?.addEventListener("click", (): void => {
        mainPage.className = 'init-main-page';
        testItem[testChosen.test].classList.remove("tests__item_chosen");
        mainPage.innerHTML = `
        <section class="init-page">
            <p>Выберите тест из списка</p>
        </section>
        `
    })
}

let exitTest = (): void => {
    let exitBtn = document.querySelector(".test-start-header__exit") as HTMLElement;
    let exitModal = document.querySelector(".test-exit-modal") as HTMLElement;
    let cancelBtn = document.querySelector(".test-exit-modal__btn_red") as HTMLElement;
    let exitTestBtn = document.querySelector(".test-exit-modal__btn_white") as HTMLElement;

    exitBtn.addEventListener('click', (): void => {
        exitModal.style.display = "flex";
    })

    cancelBtn.addEventListener('click', (): void => {
        exitModal.style.display = "none";
    })

    exitTestBtn.addEventListener('click', (): void => {
        testItem[testChosen.test].classList.remove("tests__item_chosen");
        mainPage.classList.replace('test-start-page', 'init-main-page');
        mainPage.innerHTML = `
            <section class="init-page">
                <p>Выберите тест из списка</p>
            </section>
        `
    })
}

let radioChecked = (radioBtns: NodeListOf<HTMLInputElement>): void => {
    radioBtns.forEach(el => {
        el.addEventListener('click', (): void => {
            questionsDone(radioBtns);
        })
    })
}

let uncheckRadio = (radioBtns: NodeListOf<HTMLInputElement>): void => {
    let resetBtn = document.querySelector(".test-info__reset") as HTMLElement;

    resetBtn.addEventListener('click', (): void => {
        radioBtns.forEach(el => {
            el.checked = false;
        })
        questionsDone(radioBtns);
    })
}

let countDown = (radioBtns: NodeListOf<HTMLInputElement>): void => {
    let counter: number = 30 * 60 - 1;
    let timer = document.querySelector(".test-info__timer") as HTMLElement;
    let minutes: string = '';
    let seconds: string = '';
    setInterval(() => {
        if (counter <= 0) {
            testResults(true, radioBtns)
        }
        if (counter - Math.floor(counter / 60) * 60 > 9) {
            seconds = `${counter - Math.floor(counter / 60) * 60}`
        }
        else {
            seconds = `0${counter - Math.floor(counter / 60) * 60}`
        }
        if (Math.floor(counter / 60) > 9) {
            minutes = `${Math.floor(counter / 60)}`;
        }
        else {
            minutes = `0${Math.floor(counter / 60)}`;
        }
        timer.innerHTML = `00:${minutes}:${seconds}`;
        counter--;
    }, 1000)
}

let saveAnswers = (radioBtns?: NodeListOf<HTMLInputElement>): void => {
    let answersArr: { question: string, answer: string }[][];
    if (JSON.parse(localStorage.getItem("answers")!)) {
        answersArr = JSON.parse(localStorage.getItem("answers")!)
    } else {
        answersArr = [];
        for (let i = 0; i < tests.length; i++) {
            answersArr.push([]);
        }
    }
    if (radioBtns){
        let answers: { question: string, answer: string }[] = [];
        radioBtns.forEach(el => {
            if (el.checked === true) {
                answers.push({
                    question: el.name,
                    answer: el.value,
                });
            }
        }) 
        answersArr[testChosen.test] = answers;
    }

    localStorage.setItem("answers", JSON.stringify(answersArr));
    storedAnswers = JSON.parse(localStorage.getItem("answers")!);
}

saveAnswers();

let startTest = (btn_class: string): void => {
    let startBtn = document.querySelector(btn_class) as HTMLElement;

    startBtn?.addEventListener("click", (): void => {
        mainPage.className = 'test-start-page';
        mainPage.innerHTML = `
        <div class='test-start-header'>
            <span class='test-start-header__exit'>Выход</span>
            <span class='test-start-header__text'>${tests[testChosen.test].name}</span>
            <div class='test-info'>
                <span class='test-info__reset'>Сбросить все ответы</span>
                <span class='test-info__vertical-line'></span>
                <span class='test-info__remain'>0/5</span>
                <span class='test-info__vertical-line'></span>
                <span class='test-info__timer'>00:30:00</span>
            </span>
        </div>
        `
        mainPage.innerHTML += `
        <div class='test-exit-modal'>
            <div class='test-exit-modal__content'>
                <div class='test-exit-modal__texts'>
                    <span class='test-exit-modal__text test-exit-modal__text_normal'>Вы уверены что хотите выйти?</span>
                    <span class='test-exit-modal__text test-exit-modal__text_small'>Все результаты будут сброшены</span>
                </div>
                <div class='test-exit-modal__btns'>
                    <input type='button' class='test-exit-modal__btn test-exit-modal__btn_white' value = 'Выход'/>
                    <input type='button' class='test-exit-modal__btn test-exit-modal__btn_red' value = 'Отмена'/>
                </div>
            </div>
        </div>
        `

        let testMain = document.createElement('div');
        testMain.classList.add('test-start-main');
        tests[testChosen.test].questionary.forEach((el, index) => {
            let quiz = document.createElement('div');
            quiz.classList.add('test-start-quiz');
            let answersDiv = document.createElement('div');
            answersDiv.classList.add('test-start-quiz__answers');
            quiz.innerHTML += `
                <div class='test-start-quiz__question'>${index + 1}. ${el.question}</div>
            `
            el.answers.forEach((answer, index) => {
                let answerItem = document.createElement('div');
                answerItem.classList.add('test-start-quiz__answer');
                answerItem.innerHTML = `
                <label>
                <input class='test-start-quiz__radio' type='radio' name='${el.question}' value='${answer}'>
                ${answer}
                </label>
                `;
                answersDiv.append(answerItem)
            })
            quiz.append(answersDiv);
            testMain.append(quiz);
        })
        mainPage.append(testMain);
        mainPage.innerHTML += `
        <div class='test-start-footer'>
            <input type='button' class='test-start-footer__end' value='Завершить' />
        </div>
        `
        let radioBtns = document.querySelectorAll(
            ".test-start-quiz__radio"
        ) as NodeListOf<HTMLInputElement>;
        exitTest();
        radioChecked(radioBtns);
        uncheckRadio(radioBtns);
        countDown(radioBtns);
        document.querySelector('.test-start-footer__end')!.addEventListener('click', (): void => testResults(true, radioBtns));
    })
}

let testResults = (saveRes: boolean, radioBtns?: NodeListOf<HTMLInputElement>): void => {
    if (saveRes) {
        saveAnswers(radioBtns!);
    }
    mainPage.className = 'test-results-page';
    mainPage.innerHTML = `
        <div class='test-results-header'>
            <span class='test-results-header__text'>${tests[testChosen.test].name}</span>
        </div>
    
        <div class='test-results-info'>
            <span class='test-results-info__text'>Тест завершён</span>
            <span class='test-results-info__result'>Вы ответили на ${storedAnswers[testChosen.test].length} из ${tests[testChosen.test].questionary.length} Вопросов</span>
        </div>
        `

    let testResults = document.createElement('div');
    testResults.classList.add('test-results-main');
    testResults.innerHTML = `<span class='test-results-main__text'>Ваши ответы</span>`;
    tests[testChosen.test].questionary.forEach((el, index) => {
        let answer = document.createElement('div');
        answer.classList.add('test-results-answer');
        let userAnswerIndex: number | null = null;
        storedAnswers[testChosen.test].forEach((ans, ans_index) => {
            if (el.question === ans.question) {
                userAnswerIndex = ans_index;
            }
        })
        let userAnswer: string = '';
        if (userAnswerIndex === null) {
            userAnswer = 'Не ответили';
        }
        else {
            userAnswer = storedAnswers[testChosen.test][userAnswerIndex].answer;
        }
        answer.innerHTML = `
            <span class='test-results-answer__question'>${index + 1}. ${el.question}</span>
            <div class='test-results-answer__res'>
                <div class='test-results-answer__correct-answer'>Правильный ответ: ${el.correctAnswer}</div>
                <div class='test-results-answer__user-answer'>Вы ответили: ${userAnswer}</div>
            </div>
        `
        testResults.append(answer);
    })

    mainPage.append(testResults);
    mainPage.innerHTML += `
    <div class='test-results-footer'>
        <input type='button' class='test-results-footer__retry' value='Пройти еще раз' />
    </div>
    `
    startTest('.test-results-footer__retry');
    document.querySelector('.test-results-footer__retry')?.addEventListener('click', ():void => {
        let answersChange = JSON.parse(localStorage.getItem("answers")!);
        answersChange[testChosen.test] = [];
        localStorage.setItem("answers", JSON.stringify(answersChange));
    })
}

testItem.forEach((el, index) => {
    el.addEventListener("click", (): void => {
        if (!testChosen.isChosen) {
            testChosen.test = index;
            testChosen.isChosen = true;
            el.classList.add("tests__item_chosen");
            if (storedAnswers[testChosen.test].length != 0) {
                testResults(false)
            } else {
                mainPage.classList.replace('init-main-page', 'test-desc-page');
                mainPage.innerHTML = `
                <div class='desc-header'>
                    <p class='desc-header__text'>Описание</p>
                </div>
                <div class='desc'>
                    <p class='desc__text'>${tests[index].description}</p>
                    <div class='desc__btns'>
                        <input type='button' class='desc__btn desc__btn_red' value='Начать' />
                        <input type='button' class='desc__btn desc__btn_white' value='Отмена' />
                    </div>
                </div>
            `
            }
        } else {
            testItem[testChosen.test].classList.remove("tests__item_chosen");
            testChosen.test = index;
            el.classList.add("tests__item_chosen");
            if (storedAnswers[testChosen.test].length != 0) {
                testResults(false)
            } else {
                mainPage.classList.replace('init-main-page', 'test-desc-page');
                mainPage.innerHTML = `
                <div class='desc-header'>
                    <p class='desc-header__text'>Описание</p>
                </div>
                <div class='desc'>
                    <p class='desc__text'>${tests[index].description}</p>
                    <div class='desc__btns'>
                        <input type='button' class='desc__btn desc__btn_red' value='Начать' />
                        <input type='button' class='desc__btn desc__btn_white' value='Отмена' />
                    </div>
                </div>
                `
            }
        }
        startTest(".desc__btn_red");
        cancelDesc();
    });
});

burger.addEventListener("click", (): void => {
    if (!showNav) {
        burger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M8.04754 13.0623L7.35387 13.774C7.06015 14.0753 6.5852 14.0753 6.29461 13.774L0.220288 7.545C-0.0734293 7.24365 -0.0734293 6.75636 0.220288 6.45821L6.29461 0.226013C6.58833 -0.0753378 7.06327 -0.0753378 7.35387 0.226013L8.04754 0.937715C8.34438 1.24227 8.33813 1.73918 8.03504 2.03733L4.26984 5.71766H13.2501C13.6657 5.71766 14 6.06068 14 6.48706V7.51294C14 7.93932 13.6657 8.28235 13.2501 8.28235H4.26984L8.03504 11.9627C8.34126 12.2608 8.34751 12.7577 8.04754 13.0623Z" fill="#8EACBB"/>
        </svg>`;
        menu.classList.add("open");
        navText.classList.add("visible");
        testItem.forEach((el) => {
            el.classList.add("visible");
        });
        showNav = true;
        localStorage.setItem('menu-closed', 'true');
    } else {
        burger.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="12"
        viewBox="0 0 14 12"
        fill="none"
      >
        <line y1="1" x2="14" y2="1" stroke="#8EACBB" stroke-width="2" />
        <line y1="11" x2="14" y2="11" stroke="#8EACBB" stroke-width="2" />
        <line y1="6" x2="14" y2="6" stroke="#8EACBB" stroke-width="2" />
      </svg>`;
        menu.classList.remove("open");
        navText.classList.remove("visible");
        testItem.forEach((el) => {
            el.classList.remove("visible");
        });
        showNav = false;
        localStorage.setItem('menu-closed', 'false');
    }
});

if (localStorage.getItem('menu-closed') == 'true') {
    burger.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M8.04754 13.0623L7.35387 13.774C7.06015 14.0753 6.5852 14.0753 6.29461 13.774L0.220288 7.545C-0.0734293 7.24365 -0.0734293 6.75636 0.220288 6.45821L6.29461 0.226013C6.58833 -0.0753378 7.06327 -0.0753378 7.35387 0.226013L8.04754 0.937715C8.34438 1.24227 8.33813 1.73918 8.03504 2.03733L4.26984 5.71766H13.2501C13.6657 5.71766 14 6.06068 14 6.48706V7.51294C14 7.93932 13.6657 8.28235 13.2501 8.28235H4.26984L8.03504 11.9627C8.34126 12.2608 8.34751 12.7577 8.04754 13.0623Z" fill="#8EACBB"/>
        </svg>`;
    menu.classList.add("open");
    navText.classList.add("visible");
    testItem.forEach((el) => {
        el.classList.add("visible");
    });
    showNav = true;
    localStorage.setItem('menu-closed', 'true');
}


