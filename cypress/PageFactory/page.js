export default class Page {

  getLocator(locator){
    return cy.get(locator)
  }

  /**
   * get inner element containing text
   * @param element
   * @param text
   */
  getInnerElementContainingText(text) {
    const regex = new RegExp(`^${text}$`)
    return cy.contains(regex)
  }

  /**
   * get first inner element
   * @param element
   */
  getInnerFirstElement(element){
    return cy.get(element).first()
  }

  /**
   * get last inner element
   * @param element
   */
  getInnerLastElement(element) {
    return cy.get(element).last()
  }

  /**
   * click on element
   * @param element
   */
  clickOnElement(element){
   return cy.get(element).click()
  }

  forceClickOnElement(element){
   return cy.get(element).click({ force: true })
  }

  /**
   * click on the nth element
   * 
   */
  clickOnNthElement(element, number) {
    return element.eq(number).click()
  }

  /**
   * mouse over element
   * @param element
   * * @param command
   */
  mouseOverOnElement(element, command) {
    return cy.get(element).trigger(command)
  }


  /**
   * check the title of a page
   * @param title
   */
  checkPageTitle(title) {
    return cy.title().should('contain', title)
  }


  /**
   * double click on element
   * @param element
   */
 doubleClick(element) {
    return cy.get(element).dblclick()
  }

  /**
   * type to element with value
   * @param element
   * @param value
   */
  typeToElement(element, value) {
    return cy.get(element).type(value)
  }

  /**
   * scroll to element
   * @param element
   */
  scrollToElement(element) {
    return cy.get(element).scrollIntoView()
  }

  /**
   * clear cookie
   * @param cookieName
   */
  clearCookie(cookieName){
    return cy.clearCookie(cookieName)
  }

  /**
   * clear all cookies
   */
clearAllCookies(){
    cy.clearCookies()
  }

  /**
   * clear local storage
   */
  clearLocalStorage(){
    cy.clearLocalStorage()
  }

  /**
   * clear key from storage
   * @param key
   */
  cleanKeyFromLocalStorage(key) {
    cy.clearLocalStorage(key)
  }

  /**
   * select file
   * @param element
   * @param filePath
   */
  selectFile(element, filePath) {
    return cy.get(element).selectFile(filePath)
  }

  containsText(text) {
    return cy.contains(text)
  }

  wrap(element){
    return cy.wrap(element)
  }

  go(value){
    return cy.go(value)
  }

  /**
   * find nth matching elements
   * @param element
   * @param n
   */
  NthMatchingElement(element) {
    return cy.get(element).eq(n)
  }

  /**
   * check element visibility
   * @param element
   */
  elementIsVisible(element){
    return cy.get(element).should('be.visible')
  }
  /**
   * reload page
   */
  reloadPage() {
    return cy.reload(true)
  }
  /**
   * reload page
   */
  getUrl(url){
    return cy.url().should('include', url)
}

  /**
   * read file
   * @param filePath
   */
readFile(filePath){
    return cy.readFile(filePath)
  }

  /**
   * intercept
   * 
   */

  intercept(method, url, alias) {
    return cy.intercept({
         method: method,
         url: url,
       }).as(alias)
 }

 waitForPageLoad(alias){
  return cy.wait(alias)   
 }
   
}
