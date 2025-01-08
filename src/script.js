function projectExpansion() {
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        const readMoreBtn = item.querySelector('.read-more');
        const showLessBtn = item.querySelector('.show-less');
        const description = item.querySelector('.project-description');
        let overlay = null;
        
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', function() {
                item.classList.add('expanded');
                description.classList.add('expanded');
                
                overlay = document.createElement('div');
                overlay.className = 'overlay';
                item.parentNode.insertBefore(overlay, item.nextSibling);
            });
        }
        
        if (showLessBtn) {
            showLessBtn.addEventListener('click', function() {
                item.classList.remove('expanded');
                description.classList.remove('expanded');
                
                if (overlay) {
                    overlay.remove();
                    overlay = null;
                }
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', projectExpansion);