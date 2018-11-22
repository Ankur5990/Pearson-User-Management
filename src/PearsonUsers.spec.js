import React from "react";
import { shallow } from "enzyme";
import { PearsonUsers } from "./PearsonUsers";


const setup = () => shallow(<PearsonUsers />);
describe("PearsonUsers", () => {

  it("heading should be render", () => {
    const wrapper = setup();
    const h1 = wrapper.find("h1");
    expect(h1.text()).toEqual("Pearson User Management");
  });

  it('PearsonUsers Component should be render', () => {
    const wrapper = setup();
    expect(wrapper.find('PearsonUsers')).toBeDefined();
  });

  it("ComponentDidMount function to be called", () => {
    const wrapper = setup();
    wrapper.instance().componentDidMount();
    const userData = [{id: 1, first_name: "Ankur", last_name: "Tripathi", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"}, {id: 2, first_name: "Ram", last_name: "Kumar", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}]
    wrapper.setState({ users: userData });
  });

  it('component should have User Info', () => {
    const wrapper = setup();
    const event = { preventDefault: () => {} };
    expect(wrapper.find('UserInfo')).toBeDefined();
    wrapper.instance().deleteUserById(event,1);
  });

  it("Delete duplicate button 'delete-duplicate' class should not apply", () => {
    const wrapper = setup();
    expect(wrapper.find('.delete-duplicate').length).toBe(0);
  });

  it("Delete duplicate button 'delete-duplicate' class should  apply", () => {
    const wrapper = setup();
    const userData = [{id: 1, first_name: "Ankur", last_name: "Tripathi", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"}, {id: 2, first_name: "Ram", last_name: "Kumar", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}]
    wrapper.setState({ users: userData });
    expect(wrapper.find('.delete-duplicate').length).toBe(1);
  });

  it("deleteUserById function to be called", () => {
    const wrapper = setup();
    const event = { preventDefault: () => {} };
    expect(event.preventDefault).toBeDefined();
    expect(wrapper.instance().deleteUserById(event,1)).toBeUndefined();
  });

  it("deleteDuplicateUsers function to be called", () => {
    const wrapper = setup();
    const event = { preventDefault: () => {} };
    expect(event.preventDefault).toBeDefined();
    expect(wrapper.instance().deleteDuplicateUsers(event)).toBeUndefined();
  });

});
