document.addEventListener("DOMContentLoaded", e => {
    const slides_wraps = document.querySelectorAll('.slider__slides-wrap');
    const slides = document.querySelectorAll('.slider__slide');
    const slide_texts = document.querySelectorAll('.slider__text');
    
    const applyMaxHeightToElem = (elems_props,where_to_apply) => {
        elems_props = Array.from(elems_props);
        const arr_heights = elems_props.map(elem => {
            return elem.clientHeight;
        })
        const max_height = Math.max.apply(null, arr_heights);
        for ( let val of where_to_apply ) val.style.height = max_height + 'px';
    }
    
    applyMaxHeightToElem(slide_texts,slides_wraps);
});