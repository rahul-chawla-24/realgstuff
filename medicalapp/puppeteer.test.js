// import puppeteer from 'puppeteer';
import '@babel/polyfill'
const puppeteer = require('puppeteer')


test("end to end test",async ()=>{
    const browser = await puppeteer.launch({
        headless:false,
        executablePath:'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
        args:['--window-size=1920, 1080']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1536, height: 722 });
    await page.goto('http://localhost:8080/');
    // await page.click('Tabs')
    // await page.click('Tab','Home')

    // await page.click('select')
    await page.select('select','NURSE')
    await page.keyboard.type('.date','27032020')
    // await page.keyboard.type('0900')
},10000)