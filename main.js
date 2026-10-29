// global elements
const form = document.getElementById('first-form')

const nameInput = document.getElementById('nameInput')
const mailInput = document.getElementById('mailInput')
const phoneInput = document.getElementById('phoneInput')
const allFormInpus = document.querySelectorAll('form input')
const allNextBtns = document.querySelectorAll('#next')
const allBackBtns = document.querySelectorAll('#back')


//[1] control active info  
const allSteps = document.querySelectorAll('.info')

const allBtns = document.querySelectorAll('.step button')
// [2] step 2 variables
const stepTwoNxt = allNextBtns[1]
const stepTwoLabels = document.querySelectorAll('.step-2-label')
const rangeInput = document.getElementById('durationInput')
const allStepPlans = document.querySelectorAll('.duration-plans .plan')

let allDiscountEl = document.querySelectorAll('.discount')
let allMonthlyPrices = document.querySelectorAll('.price:not(.yearly)')
let allYearlyPrices = document.querySelectorAll('.price.yearly')

// [3] step 3 variables
const stepThreeNxt = allNextBtns[2]
const changeBtn = document.getElementById('change-plan')
const allChoiceInputs = document.querySelectorAll('.choice-inp')

// the parent element that will append the choosen plans
const chosenParentElement = document.querySelector('.chosen-plans')

// [4] step four logic
const stepFourHeading = document.querySelector('#plan-head')
const stepFourDuration= document.getElementById('plan-duration')

// plan price
const stepFourPrice = document.querySelector('#info-4  #plan-price')

const payTypeEle = document.getElementById('pay-type')


const monthlyOrYearly = ['', 'Monthly', 'Yearly']
const perMonthYear = ['', 'month', 'year']


// step [3] variables
const monthlyPrices = document.querySelectorAll('.choices .right:not(.yearly)')
const yearlyPrices = document.querySelectorAll('.choices .right.yearly')

const stepActivePlan = document.querySelector('.duration-plans .plan.active')

// step [4] variables
const choosenPlans = document.querySelector('.chosen-plans')
const additionalServices = document.querySelector('.additional-services')

const totalPrice = document.getElementById('total') 
const totalPriceType = document.querySelector('#total + span')

// step [5] variables
const confirmBtn = document.getElementById('confirm')

console.log(confirmBtn)

allBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        allBtns.forEach(btn => btn.classList.remove('active'))
        e.target.classList.add('active')

    })
})

form.addEventListener('submit', (e) => {
    let passKey = 0;
    let currentIdx = 0;

    
    e.preventDefault()
    
    allFormInpus.forEach(input => {
        if(input.value.trim() == '') {
           input.parentElement.querySelector('.warning').classList.remove('hide')
            input.style.borderColor = 'red'
            
        }else {
            input.parentElement.querySelector('.warning').classList.add('hide')
            input.style.borderColor = 'hsl(231, 11%, 63%)'
            passKey++

        }
        if(passKey === 3) {
           allSteps[currentIdx].classList.add('hide')
           allBtns[currentIdx].classList.remove('active')
           allBtns[currentIdx + 1].classList.add('active')
           allSteps[currentIdx + 1].classList.remove('hide')
       }
 
  

    })


})

// step 2 logic start

stepTwoLabels.forEach(label => {

    label.addEventListener('click', (e) => {
    stepTwoLabels.forEach(label => label.classList.remove('active'))
    e.target.classList.add('active')
    rangeInput.value = e.target.dataset.value

        if(e.target.dataset.value === '2') {
        allDiscountEl.forEach(el => el.classList.remove('hide'))
        allMonthlyPrices.forEach(el => el.classList.add('hide'))
        allYearlyPrices.forEach(el => el.classList.remove('hide'))
        monthlyPrices.forEach(el => el.classList.add('hide'))
        yearlyPrices.forEach(el => el.classList.remove('hide'))
        
        stepFourDuration.textContent = `(${monthlyOrYearly[+e.target.dataset.value]})`
        payTypeEle.textContent = `(per ${perMonthYear[+e.target.dataset.value]})` 
        totalPriceType.textContent = 'yr'
    }else {
        console.log(monthlyOrYearly[+e.target.dataset.value])
        allDiscountEl.forEach(el => el.classList.add('hide'))
        allMonthlyPrices.forEach(el => el.classList.remove('hide'))
        allYearlyPrices.forEach(el => el.classList.add('hide'))
        monthlyPrices.forEach(el => el.classList.remove('hide'))
        yearlyPrices.forEach(el => el.classList.add('hide'))        

        stepFourDuration.textContent = `(${monthlyOrYearly[+e.target.dataset.value]})`
        payTypeEle.textContent = `(per ${perMonthYear[+e.target.dataset.value]})` 
        totalPriceType.textContent = 'mo'
    }

    // heading.i
    })
})

rangeInput.addEventListener('change', (e) => {
  
    stepTwoLabels.forEach(label => label.classList.remove('active'))

    document.querySelector(`.label-${e.target.value}`).classList.add('active')
    if(e.target.value === '2') {
        allDiscountEl.forEach(el => el.classList.remove('hide'))
        allMonthlyPrices.forEach(el => el.classList.add('hide'))
        allYearlyPrices.forEach(el => el.classList.remove('hide'))
        monthlyPrices.forEach(el => el.classList.add('hide'))
        yearlyPrices.forEach(el => el.classList.remove('hide'))

        stepFourDuration.textContent = perMonthYear[+e.target.value]
        payTypeEle.textContent = `(per ${perMonthYear[+e.target.dataset.value]})` 
        totalPriceType.textContent = 'mo'
        
    }else {
        console.log(monthlyOrYearly[+e.target.value])
        allDiscountEl.forEach(el => el.classList.add('hide'))
        allMonthlyPrices.forEach(el => el.classList.remove('hide'))
        allYearlyPrices.forEach(el => el.classList.add('hide'))
        monthlyPrices.forEach(el => el.classList.remove('hide'))
        yearlyPrices.forEach(el => el.classList.add('hide'))
        stepFourDuration.textContent = perMonthYear[+e.target.value]
        payTypeEle.textContent = `(per ${perMonthYear[+e.target.dataset.value]})` 
        totalPriceType.textContent = 'mo'
    }

})


allStepPlans.forEach(plan => {
    
    plan.addEventListener('click', (e) => {

        allStepPlans.forEach(plan => plan.classList.remove('active'))
        if(e.target.classList.contains('plan')) {
            e.target.classList.add('active')

        }else if(e.target.parentElement.classList.contains('plan')) {
            e.target.parentElement.classList.add('active')
        }else {
            e.target.parentElement.parentElement.classList.add('active')
        }


        if(plan.classList.contains('active')) {
            console.log(plan.querySelector('h4').textContent)
            stepFourHeading.textContent = plan.querySelector('h4').textContent
            
        }

    })


})




// step 2 next btn



stepTwoNxt.addEventListener('click', (e) => {
    let activeEl = Array.from(document.querySelectorAll('.duration-plans .plan')).find(e => e.classList.contains('active'))
    let activePrice = activeEl.querySelector('.price:not(.hide)').textContent
    if(activePrice) {
    let priceText = activePrice.replace(/[^0-9]/g, '')

        
    }
    allSteps[e.target.dataset.value].classList.add('hide')
    
   document.getElementById(`info-${+e.target.dataset.value - 1}`).classList.add('hide')
   document.getElementById(`info-${e.target.dataset.value}`).classList.remove('hide')
   allBtns[+e.target.dataset.value - 2].classList.remove('active')
   allBtns[+e.target.dataset.value - 1].classList.add('active')
//    let activeEl = Array.from(document.querySelectorAll('.duration-plans .plan')).filter(e => e.classList.contains('active'))

   stepFourPrice.textContent = activePrice
})

allBackBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {

        allSteps[+e.target.dataset.value ].classList.add('hide')
        allSteps[+e.target.dataset.value - 1].classList.remove('hide')
        allBtns[+e.target.dataset.value ].classList.remove('active')
        allBtns[+e.target.dataset.value - 1].classList.add('active')

    })
})
// step 2 logic end

// step 3 logic start


stepThreeNxt.addEventListener('click', (e) => {
    allSteps[+e.target.dataset.value - 1].classList.add('hide')
    allSteps[+e.target.dataset.value ].classList.remove('hide')
    allBtns[+e.target.dataset.value - 1].classList.remove('active')
    allBtns[+e.target.dataset.value ].classList.add('active')
    const justPriceRegex = /[^0-9]/g
    const allPriceElements = document.querySelectorAll('.additional-services .right')
    const chosenPlanPrice = +stepFourPrice.textContent.replace(justPriceRegex, '')

    let sum = 0;
    allPriceElements.forEach(e => {
       sum += +e.textContent.replace(justPriceRegex, '') 
    })
       sum += chosenPlanPrice
       totalPrice.textContent = `$${sum}`
    console.log(chosenPlanPrice)
    
})

// this change btn for third step that let you back to step 2 change your plan
changeBtn.addEventListener('click', (e) => {

    allSteps[3].classList.add('hide')
    allSteps[+e.target.dataset.value].classList.remove('hide')
    allBtns.forEach(btn => btn.classList.remove('active'))
    allBtns[+e.target.dataset.value ].classList.add('active')

})

allChoiceInputs.forEach(input => {
    input.addEventListener('change', (e) => {
        
        
        if(e.target.checked) {
           

            let  servContainer = document.createElement('div')
            servContainer.id =  (e.target.id)
            let servName = document.createElement('p')
            servName.textContent = e.target.parentElement.parentElement.querySelector('h4').textContent
            let servPrice = e.target.parentElement.parentElement.parentElement.querySelector('.right:not(.hide)');
            let clonedPrice = servPrice.cloneNode(true)

            servContainer.className = 'line'
            servContainer.append(servName)
            servContainer.append(clonedPrice)

            additionalServices.append(servContainer)

        }else {
            document.querySelector(`.additional-services #${e.target.id} `).remove()


        }
        
    })
})


// step 3 logic end

// step 4 logic start
confirmBtn.addEventListener('click', (e) => {

    document.getElementById(`info-${+e.target.dataset.value - 1}`).classList.add('hide')
    document.getElementById(`info-${+e.target.dataset.value }`).classList.remove('hide')


})

// step 4 logic end