
import { currentTabMockReturn } from './__mocks__/returns'

import isPDP from '../src/js/utils/isPDP'
const currentTab = require("../src/js/utils/currentTab")

jest.mock("../src/js/utils/currentTab", () => jest.fn());

describe("Testing if is product page", () => {

  beforeEach(() => {
    jest.resetModules();
    jest.unmock("../src/js/utils/currentTab")
  })

  it("should returns false", async () => {
    currentTab.mockImplementation((callback: Function) => {
      callback({
        ...currentTabMockReturn,
        url: "https://storetheme.vtex.com/"
      })
    })

    expect(await isPDP()).toBeFalsy();
  })

  it("should returns false", async () => {
    currentTab.mockImplementation((callback: Function) => {
      callback({
        ...currentTabMockReturn,
        url: "https://raphaelbr.dev/ping/pong"
      })
    })

    expect(await isPDP()).toBeFalsy();
  })

  it("should returns true ", async () => {
    currentTab.mockImplementation((callback: Function) => {
      callback({
        ...currentTabMockReturn,
        url: "https://www.test.com.br/p"
      })
    })


    expect(await isPDP()).toBeTruthy();
  })

  it("should returns true", async () => {
    currentTab.mockImplementation((callback: Function) => {
      callback({
        ...currentTabMockReturn,
        url: "https://www.exemple.com.br/kit-bolsa-mar-k004/p?skuId=858"
      })
    })

    expect(await isPDP()).toBeTruthy();
  })
});