module.exports = {
    homeScreen: {
        startButton: 'button[class=home-btn]',
        homeText: 'h1[class="home-text"]',
    },
    loanPropTypeScreen: {
        loanDropDown: 'select[name=loanDropDown]',
        loanSelectors: {
            optionPurchase: 'option[name=purchase]',
            optionRefi: 'option[name=refi]',
            optionEquity: 'option[name=equity]',
            loanDropDownText: 'p[name="loanDropDownText"]',
        },
        propDropDown: 'select[name=propDropDown]',
        propSelectors: {
            optionSingle: 'option[name=singleHome]',
            optionTown: 'option[name=townHome]',
            optionCondo: 'option[name=condo]',
            optionMulti: 'option[name=multiHome]',
            optionMobile: 'option[name=mobileHome]',
            propDropDownText: 'p[name="propDropDownText"]',
        },
        nextButton: 'button[name=next]'
    },
    cityPropLocatedScreen: {
        cityName: 'input[name="cityName"]',
        wTwoButton: 'button[class="wTwo-btn"]',
        cityNameText: 'p[name="cityNameText"]',
    },
    whatPropLoanScreen: {
        primary: 'button[name="primary"]',
        rental: 'button[name="rental"]',
        secondary: 'button[name="secondary"]',
        whatPropText: 'p[name="whatPropText"]',
    },
    foundNewHomeScreen: {
        yesFound: 'button[name="yesFound"]',
        noFound: 'button[name="noFound"]',
        foundHomeText: 'p[name="foundHomeText"]',
    },
    realEstateAgentScreen: {
        yesAgent: 'button[name="yesAgent"]',
        noAgent: 'button[name="noAgent"]',
        realEstateText: 'p[name="realEstateText"]',
    },
    priceDownPaymentScreen: {
        purchasePrice: 'input[name="purchasePrice"]',
        downPayment: 'input[name="downPayment"]',
        wSixButton: 'button[class="wSix-btn"]',
        estimatedPurchaseText: 'p[name="estimatedPurchaseText"]',
        downPaymentText: 'p[name="downPaymentText"]',
    },
    creditScoreScreen: {
        excellent: 'button[name="excellent"]',
        good: 'button[name="good"]',
        fair: 'button[name="fair"]',
        poor: 'button[name="poor"]',
        creditScoreText: 'p[name="creditScoreText"]',
    },
    bankForeScreen: {
        noBankruptForeclose: 'button[name="noBankruptForeclose"]',
        bankruptcy: 'button[name="bankrupt"]',
        foreclosure: 'button[name="foreclose"]',
        both: 'button[name="bankruptForeclose"]',
        bankForeText: 'p[name="bankForeText"]',
    },
    addressScreen: {
        addressOne: 'input[name="addressOne"]',
        addressTwo: 'input[name="addressTwo"]',
        addressThree: 'input[name="addressThree"]',
        marginButton: 'button[class="margin-btn"]',
        addressText: 'p[name="addressText"]',
    },
    nameScreen: {
        firstName: 'input[name="firstName"]',
        lastName: 'input[name="lastName"]',
        email: 'input[name="email"]',
        marginButton: 'button[class="margin-btn"]',
        nameText: 'p[name="nameText"]',
    },
    overviewScreen: {
        name: 'div[name="name"]',
        email: 'div[name="email"]',
        loan: 'div[name="loan"]',
        property: 'div[name="property"]',
        city: 'div[name="city"]',
        propertyType: 'div[name="propertyType"]',
        found: 'div[name="found"]',
        agent: 'div[name="agent"]',
        cost: 'div[name="cost"]',
        downPayment: 'div[name="downPayment"]',
        credit: 'div[name="credit"]',
        bankRuptcy: 'div[name="bankRuptcy"]',
        address: 'div[name="address"]',
        sendButton: 'button[name="send"]',
        startOver: 'button[name="startOver"]',
        overviewText: 'p[name="overviewText"]',
    },
    overviewScreenOutput: {
        nameOutput: 'p[name=nameOutput]',
        emailOutput: 'p[name=emailOutput]',
        typeOfLoan: 'p[name=typeOfLoan]',
        propertyType: 'p[name=propertyType]',
        city: 'p[name=city]',
        loanPropertyType: 'p[name=loanPropertyType]',
        foundNewHome: 'p[name=foundNewHome]',
        realEstateAgent: 'p[name=realEstateAgent]',
        purchasePrice: 'p[name=purchasePrice]',
        downPayment: 'p[name=downPayment]',
        creditScore: 'p[name=creditScore]',
        bankruptcyHistory: 'p[name=bankruptcyHistory]',
        currentAddress: 'p[name=currentAddress]'
    },
    thankYouScreen: {
        homeButton: 'button[name="homeButton"]',
        thankYouText: 'p[name="thankYouText"]',
    }
}