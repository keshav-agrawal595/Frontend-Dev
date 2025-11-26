$(function(){
    let xhr=null
    $('#q').on('input', function(){
        const v=$(this).val().trim()
        $('#results').empty()
        $('#loader').show()
        if(xhr) xhr.abort()
        xhr=$.ajax({
            url: 'http://localhost:3001/products',
            data: { q: v },
            method: 'GET',
            success: function(data){
                if(!data || !data.length){
                    $('#results').text('No products found')
                    return
                }
                data.forEach(p=>{
                    const el=$('<div class="product"></div>')
                    el.append(`<img src="${p.image||''}">`)
                    el.append(`<div><div>${p.name}</div><div>₹ ${p.price}</div></div>`)
                    $('#results').append(el)
                })
            },
            error: function(_,__,err){ if(err!=='abort') $('#results').text('Request failed') },
            complete: function(){ $('#loader').hide(); xhr=null }
        })
    })
})