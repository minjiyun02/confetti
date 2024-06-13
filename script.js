document.addEventListener("DOMContentLoaded", () => {

    // .container from html
    const confetties = document.querySelector('.container');

    const createConfetti = () => {
        const confetti = document.createElement('div');
        
        // confetti variations and colors that will be randomly assigned
        const confettiList = ['〰', '⋆', 'Ꮺ', '╰', '⭑', '𓂃', 'ノ', '✧'];
        const colors = ['#FF0000', '#884EA0', '#5DADE2', '#F4D03F', '#DE3163', '#DFFF00' ,'#9FE2BF', '#CCCCFF'];
        
        // randomize
        confetti.textContent = confettiList[Math.floor(Math.random() * confettiList.length)];
        confetti.classList.add('confetti')
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.color = colors[Math.floor(Math.random()*colors.length)];

        // show on web
        confetties.appendChild(confetti);

        setTimeout(() => {      // confetti lasts until it reaches the end of the screen
            confetti.remove();  // 5 seconds should be enough
        }, 5000);
    };

    setInterval(() => {     // confetti spawn rate
        createConfetti();
    }, 100);
});