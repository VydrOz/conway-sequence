<img width="1280" height="640" alt="conway-sequence-banner-2" src="https://github.com/user-attachments/assets/4ed8d3a7-fd59-4c23-8d9e-79f0a413a393" />

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

<img width="696" height="280" alt="firefox_rHkdCYwi98_1" src="https://github.com/user-attachments/assets/3c1d0ea4-df3e-4efd-94cc-3a86a36d469a" />

## Options

* **Zoom**: 25% to 200%.
* **Speed**: ×0.25 to ×4, with pause / resume.
* **Display**: numbers or colored squares.
* **Theme**: color palette of the page.

## Extras

This project include `1` easter egg  !

<details>
<summary>#1 - Spoiler</summary>

> If you type "bernardwerber" (*Bernard Werber*), all the digits turn into ants. 
> This refers to his book "*Le Jour des **fourmis***".
> The **Ants** display card remains available after unlocking it for the current page.
>
> <img width="300" height="54" alt="image" src="https://github.com/user-attachments/assets/aa3082c5-feb8-4ce3-bbf2-c152bb204425" />


</details>

## Special mention

Commit messages inspired by Carlos Cuesta's project : [Gitmoji](https://gitmoji.dev)

Color palette from Chris Kempson's repository : [tomorrow-theme](https://github.com/chriskempson/tomorrow-theme)

Easter egg script (`egg.min.js`) from Mike Flynn's repository : [Egg.js](https://github.com/mikeflynn/egg.js)
