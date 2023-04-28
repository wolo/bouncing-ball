import "./style.css";
import "./ball-style.css";
import { AnimateOptionsType } from "./types";
import { animate } from "./animate";
import { KameleoonClient, KameleoonUtils } from "@kameleoon/javascript-sdk";

const siteCode = "dhqz9s1tb6";
const featureKey = "bouncing_ball_demo";
const visitorCode = KameleoonUtils.getVisitorCode("www.example.com");
const variableKeys = {
  ballOneColor: "ball_one_color",
  ballTwoColor: "ball_two_color",
  ballOneParameters: "ball_one_parameters",
  ballTwoParameters: "ball_two_parameters",
};

// -- Configure the SDK
const client = new KameleoonClient(siteCode);

async function init(): Promise<void> {
  // -- Initialize the SDK
  await client.initialize();

  // -- Get the feature flag variables for the `ball` element
  const ballOneOptions = client.getFeatureFlagVariable({
    visitorCode,
    featureKey,
    variableKey: variableKeys.ballOneParameters,
  }).value;
  const ballTwoOptions = client.getFeatureFlagVariable({
    visitorCode,
    featureKey,
    variableKey: variableKeys.ballTwoParameters,
  }).value;
  const ballOneColor = client.getFeatureFlagVariable({
    visitorCode,
    featureKey,
    variableKey: variableKeys.ballOneColor,
  }).value;
  const ballTwoColor = client.getFeatureFlagVariable({
    visitorCode,
    featureKey,
    variableKey: variableKeys.ballTwoColor,
  }).value;

  // -- Create a root `app` element in the DOM
  const app = document.getElementById("app")!;

  // -- Create a `ball` element in the DOM
  const ballOne = document.createElement("div");
  const ballTwo = document.createElement("div");

  // -- Set the `id` of `ball`(used for `src/ball-style.css`)
  ballOne.id = "ball-1";
  ballTwo.id = "ball-2";

  // -- Set color of the ball using the feature flag variable
  ballOne.style.backgroundColor = ballOneColor as string;
  ballTwo.style.backgroundColor = ballTwoColor as string;

  // -- Append `ball` to `app`
  app.appendChild(ballOne);
  app.appendChild(ballTwo);

  // -- Give `ball` a starting position and speed
  // (can be done manually, but for now we use the feature flag variables)
  // const ballOneOptions: AnimateOptionsType = {
  //   x: 0,
  //   y: 0,
  //   xSpeed: 5,
  //   ySpeed: 5,
  // };
  // const ballTwoOptions: AnimateOptionsType = {
  //   x: 0,
  //   y: 0,
  //   xSpeed: 10,
  //   ySpeed: 10,
  // };

  // -- Animate `ball`
  animate(ballOne, ballOneOptions as AnimateOptionsType);
  animate(ballTwo, ballTwoOptions as AnimateOptionsType);
}

init();
