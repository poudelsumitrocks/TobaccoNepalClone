export const getProducts = (category) => {
    switch (category) {
        case 'all':
            return 'All Product'
        case 'gutkha':
            return 'Gutkha Products'
        case 'surti':
            return 'Surti/Khaini Products'
        case 'jarda':
            return 'Jarda Products'
        case 'pan-masala':
            return 'Sada Pan Masala (Non-Tobacco)'
        return category
    }
}