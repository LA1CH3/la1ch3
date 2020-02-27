import React from 'react';

import * as CSS from 'csstype';

import {
  lineHeightBodyMedium,
  lineHeightBodySmall,
  lineHeightHeadingLarge,
  lineHeightHeadingMedium,
  lineHeightHeadingSmall,
} from '../src/line-height.tokens';

import {
  fontSizeTiny,
  fontSizeSmall,
  fontSizeMedium,
  fontSizeLarge,
  fontSizeHuge,
  fontSizeGiant,
  fontSizeMassive,
} from '../src/font-size.tokens';

const lineHeightStyles = (
  lineHeight: string,
  fontSize: string,
): CSS.Properties => ({
  lineHeight,
  fontSize,
});

export default {
  title: 'Line Height',
};

export const bodySmallWithFontSizeTiny = () => (
  <p style={lineHeightStyles(lineHeightBodySmall, fontSizeTiny)}>
    What the fuck did you just fucking say about me, you little bitch? I'll have
    you know I graduated top of my class in the Navy Seals, and I've been
    involved in numerous secret raids on Al-Quaeda, and I have over 300
    confirmed kills. I am trained in gorilla warfare and I'm the top sniper in
    the entire US armed forces. You are nothing to me but just another target. I
    will wipe you the fuck out with precision the likes of which has never been
    seen before on this Earth, mark my fucking words. You think you can get away
    with saying that shit to me over the Internet? Think again, fucker. As we
    speak I am contacting my secret network of spies across the USA and your IP
    is being traced right now so you better prepare for the storm, maggot. The
    storm that wipes out the pathetic little thing you call your life. You're
    fucking dead, kid. I can be anywhere, anytime, and I can kill you in over
    seven hundred ways, and that's just with my bare hands. Not only am I
    extensively trained in unarmed combat, but I have access to the entire
    arsenal of the United States Marine Corps and I will use it to its full
    extent to wipe your miserable ass off the face of the continent, you little
    shit. If only you could have known what unholy retribution your little
    "clever" comment was about to bring down upon you, maybe you would have held
    your fucking tongue. But you couldn't, you didn't, and now you're paying the
    price, you goddamn idiot. I will shit fury all over you and you will drown
    in it. You're fucking dead, kiddo.
  </p>
);

export const bodySmallWithFontSizeSmall = () => (
  <p style={lineHeightStyles(lineHeightBodySmall, fontSizeSmall)}>
    You think this takes concentration? Try healing in World of Warcraft after
    someone in the group just feared the entire room and the stupid death knight
    has stolen all the aggro from the tank, all whilst trying to reach deep into
    the bag for the extra cheesy dorritos. Now THAT is a skill. This is just a
    bunch of tap dancing in tight clothes with a room full of genelemen looking
    intently at you.. uhh no thanks. Ill take the fame of being the #1 ranked
    healer in all of Azeroth.
  </p>
);

export const bodyMediumWithFontSizeMedium = () => (
  <p style={lineHeightStyles(lineHeightBodyMedium, fontSizeMedium)}>
    I sexually Identify as an Attack Helicopter. Ever since I was a boy I
    dreamed of soaring over the oilfields dropping hot sticky loads on
    disgusting foreigners. People say to me that a person being a helicopter is
    Impossible and I’m fucking retarded but I don’t care, I’m beautiful. I’m
    having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114
    Hellfire missiles on my body. From now on I want you guys to call me
    “Apache” and respect my right to kill from above and kill needlessly. If you
    can’t accept me you’re a heliphobe and need to check your vehicle privilege.
    Thank you for being so understanding.
  </p>
);

export const headingSmallWithFontSizeLarge = () => (
  <p style={lineHeightStyles(lineHeightHeadingSmall, fontSizeLarge)}>
    Free in-depth guides for professional frontend developers. Made by Storybook
    maintainers.
  </p>
);

export const headingMediumWithFontSizeHuge = () => (
  <p style={lineHeightStyles(lineHeightHeadingMedium, fontSizeHuge)}>
    Blog Post: Using ESLint and Prettier in a TypeScript Project
  </p>
);

export const headingLargeWithFontSizeGiant = () => (
  <p style={lineHeightStyles(lineHeightHeadingLarge, fontSizeGiant)}>
    LA1CH3 Design System: How It Works and Stuff
  </p>
);
