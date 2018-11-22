import React from "react";
import { shallow } from "enzyme";
import  UserInfo  from "./UserInfo";

const userInfo = {id: 1, first_name: "Ankur", last_name: "Tripathi", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"};
const id = 1;

describe('UserInfo Component', () => {
    const deleteUserById = jest.fn();
    const wrapper = shallow(
    <UserInfo
      userData={userInfo}
      deleteUserById={deleteUserById}
      key={id}
    />
  );

  it('UserInfo component should be render', () => {
    expect(wrapper.find('UserInfo')).toBeDefined();
  });

  it('UserInfo component contain class user-info ', () => {
    expect(wrapper.find('.user-info')).toHaveLength(1);
  });

  it('UserInfo component contain class user-info-cont ', () => {
    expect(wrapper.find('.user-info-cont')).toHaveLength(1);
  });

  it('props value should be defined', () => {
    expect(wrapper.props()).toBeDefined();
  });

});