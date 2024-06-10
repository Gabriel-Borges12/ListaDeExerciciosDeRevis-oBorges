// GABRIEL CAMARGO DE SOUZA BORGES

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isVisible = answer.style.display === 'block';

            document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');

            if (!isVisible) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});
