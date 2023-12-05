import "./style.css";
import { KameleoonClient } from "@kameleoon/javascript-sdk";
import { animate, createBall } from "./helpers";
import { featureKey, siteCode, visitorCode } from "./constants";

// -- Configure the SDK
const configuration = {
   updateInterval: 1, // update feature flags every minute
};
const client = new KameleoonClient({ siteCode, configuration });
// const client = new KameleoonClient({ siteCode });

async function init(): Promise<void> {
  // -- Initialize the SDK
  await client.initialize();

  // -- Reload the page when the configuration is updated
  client.onConfigurationUpdate(() => {
    window.location.reload();
  });

  // -- Feature variables:
  // - Ball size (number)
  const ballSize = client.getFeatureFlagVariable({
    visitorCode,
    featureKey,
    variableKey: "ball_size",
  }).value as number;
  // - Ball color (string)
  const ballColor = client.getFeatureFlagVariable({
    visitorCode,
    featureKey,
    variableKey: "ball_color",
  }).value as string;
  // - Ball speed (number)
  const ballSpeed = client.getFeatureFlagVariable({
    visitorCode,
    featureKey,
    variableKey: "ball_speed",
  }).value as number;
  // - Number of balls (number)
  const ballsAmount = client.getFeatureFlagVariable({
    visitorCode,
    featureKey,
    variableKey: "balls_amount",
  }).value as number;
  // - Randomize on bounce (boolean) - whether the color of the ball should change on bounce
  const randomizeOnBounce = client.getFeatureFlagVariable({
    visitorCode,
    featureKey,
    variableKey: "randomize_on_bounce",
  }).value as boolean;
  // - Screen title (string)
  const screenTitle = client.getFeatureFlagVariable({
    visitorCode,
    featureKey,
    variableKey: "title_text",
  }).value as string;

  const titleElement = document.querySelector("#title > p")!;
  titleElement.textContent = screenTitle;

  // -- Main code --
  for (let i = 0; i < ballsAmount; i++) {
    const ball = createBall({
      color: ballColor,
      speed: ballSpeed,
      size: ballSize,
    });

    animate(ball, randomizeOnBounce);
  }
}

init();
