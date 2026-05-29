// script.js

const cardsPerPage = 20;

const cards =
document.querySelectorAll('.card');

const pagination =
document.getElementById('pagination');

let currentPage = 1;

/* 显示页面 */

function showPage(page){

    currentPage = page;

    const start =
    (page - 1) * cardsPerPage;

    const end =
    start + cardsPerPage;

    cards.forEach((card,index)=>{

        if(index >= start && index < end){

            card.style.display = 'block';

        }else{

            card.style.display = 'none';

        }

    });

    renderPagination();
}

/* 渲染分页 */

function renderPagination(){

    pagination.innerHTML = '';

    const totalPages =
    Math.ceil(cards.length / cardsPerPage);

    /* 上一页 */

    const prevBtn =
    document.createElement('button');

    prevBtn.innerText = '上一页';

    prevBtn.onclick = ()=>{

        if(currentPage > 1){

            showPage(currentPage - 1);

        }

    };

    pagination.appendChild(prevBtn);

    /* 页码 */

    for(let i = 1;i <= totalPages;i++){

        const btn =
        document.createElement('button');

        btn.innerText = i;

        if(i === currentPage){

            btn.classList.add('active');

        }

        btn.onclick = ()=>{

            showPage(i);

        };

        pagination.appendChild(btn);

    }

    /* 下一页 */

    const nextBtn =
    document.createElement('button');

    nextBtn.innerText = '下一页';

    nextBtn.onclick = ()=>{

        if(currentPage < totalPages){

            showPage(currentPage + 1);

        }

    };

    pagination.appendChild(nextBtn);

}

/* 初始化 */

showPage(1);