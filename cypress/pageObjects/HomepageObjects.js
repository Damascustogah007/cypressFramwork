import Page  from "../PageFactory/page";
import data from "../testData/homePageData.json"

export default class Homepage extends Page{
    constructor(){
        super()
        this.course = '[data-test="courses-dropdown"]'
        this.foundation = 'h2[data-test="course-title"]'
        this.learningMaterial = 'div[class="pt-6"]'
        this.getStartedbtn = 'a[href="/testing-foundations"]'
        this.url = '/testing-foundations',
        this.hostname = 'localhost',
        this.alias = 'getTestingFoundations'
        this.testingFoundationHeader = ".mt-1 > .block"
    }

    getCourse(){
        return this.getLocator(this.course)
        .should('be.visible')
        .then(($el) => {
            const name = $el.text()
            this.wrap($el).should('have.text', name)
        })
    }

    verifyLengthOfLearningMaterialsOnPage(){ 
        return this.getLocator(this.learningMaterial).then(($course)=>{
            const lengthOfCourse = $course.length
            this.wrap($course).should('have.length', lengthOfCourse)
        })
    }

    navigateToTestingFoundation(){
        return this.getLocator(this.foundation)
        .eq(1)
        .scrollIntoView()
        .should('be.visible')
        .and('exist')
        .click()
    }
    
    navigateToTestingFoundationPage(){
        return this.getLocator(this.getStartedbtn).click() 
        // .invoke('text')
        // .should('equal','Get started')  
    }

    getTestingHeader(){
        return this.getLocator(this.testingFoundationHeader).should('be.visible')
    }

    navigateAndVerifyHomepage = () => {
        this.checkPageTitle(data.pageTitle)
        this.getCourse()
        this.getInnerElementContainingText(data.learningHeader)
        this.verifyLengthOfLearningMaterialsOnPage()
        this.navigateToTestingFoundation()
        this.verifyLengthOfLearningMaterialsOnPage()
        this.intercept(this.url, this.hostname, this.alias)
        this.navigateToTestingFoundationPage()
        this.waitForPageLoad(data.testingFoundationAlias)
    }

    verifyTestFoundationPage(){
       this.getUrl(this.url)
       this.getTestingHeader()
    }
}