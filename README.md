## About
My father is a fan of the french writer [Bernard Werber](https://en.wikipedia.org/wiki/Bernard_Werber). One day, he told me about a book called "[*Le Jour des fourmis*](https://en.wikipedia.org/wiki/Le_Jour_des_fourmis)" (english: *The Day of the Ants*)  and the enigma it contained. After about 5s of searching, this enigma is called "Conway Sequence", also known as "Look and Say Sequence".

I was looking for a short development project and this one came at just the right time to give me an idea : create a visualization of this sequence !

## Conway Sequence
To generate a member of the sequence from the previous member, read off the digits of the previous member, counting the number of digits in groups of the same digit.

For example:
* 1 is read off as "one 1" or 11.
* 11 is read off as "two 1s" or 21.
* 21 is read off as "one 2, one 1" or 1211.
* 1211 is read off as "one 1, one 2, two 1s" or 111221.
* 111221 is read off as "three 1s, two 2s, one 1" or 312211.
###### \- *for more details, see the dedicated [Wikipedia article](https://en.wikipedia.org/wiki/Look-and-say_sequence)*

## Preview

![output-onlinegiftools](https://github.com/VydrOz/conway-sequence/assets/61025448/32cacc34-73b5-488a-a48a-5bf65752b169)

## Special mention

Color palette from Chris Kempson's repository : [tomorrow-theme](https://github.com/chriskempson/tomorrow-theme).
