export const url = 'https://wow.ieeeshasb.org/';

const auth = 'api/auth/'; 
const mobile = 'api/mobile/'; 
const dashboard = 'api/dashboard/'; 
const enduser =  'api/enduser/';
const lang = localStorage.getItem('lang') || 0;

// post
export const addMainCategoryUrl = url + dashboard + 'add_main_category'
export const addMainSliderUrl = url + dashboard + 'add_home_slider'
// for special category
export const addBestBrandUrl = url + dashboard + 'add_category_brande'
export const addSubCategoryUrl = url + dashboard + 'add_sub_category'
export const addCategorySliderUrl = url + dashboard + 'add_category_slider'
export const addCategorySpecialImageUrl = url + dashboard + 'add_special_img'
export const addSubCategoryOfSubCategory = url + dashboard + 'add_sub_ofsub_category'



// get
export const getMainCategoryNamesUrl = url + dashboard + 'main_categories_names/' +lang
export const getAllHomeSlidersUrl = url + dashboard + 'all_home_slider/' +lang
export const getSpecificMainCategoryNamesUrl = url + dashboard + 'specific_category/'
// for special category
export const getSpecialCategoryUrl = url + dashboard + 'specific_category/'
export const getBestBrandsUrl = url + dashboard + 'all_category_brands/'
export const getSubCategoriesUrl = url + dashboard + 'all_sub_category_names/'
export const getCategorySlidersUrl = url + dashboard + 'all_category_sliders/'
export const getCategorySpecialImagesUrl = url + dashboard + 'category_special_imgs/'
export const getSubCategoriesOfSubCategoryUrl = url + dashboard + 'all_sub_ofsub_category_names/'


// delete
export const deleteMainCategoryUrl = url + dashboard + 'delete_category/'
export const deleteMainSliderUrl = url + dashboard + 'delete_home_slider/'
//special Category

export const deleteBestBrandUrl = url + dashboard + 'delete_category/'
export const deleteSubCategoryUrl = url + dashboard + 'delete_home_slider/'
export const deleteSubCategoryOfSubCategoryUrl = url + dashboard + 'delete_category/'
export const deleteCatSliderUrl = url + dashboard + 'delete_home_slider/'
export const deleteCatSpecialImageUrl = url + dashboard + 'delete_home_slider/'

// update 
export const updateMainCategoryUrl = url + dashboard + 'update_category/'


// aut 
export const vendorSignUpUrl = url + auth + 'register_vendor'
export const signUpUrl = url + auth + 'register'
export const loginUpUrl = url + auth + 'login'


// get 
export const getNavDataUrl = url + enduser + 'navbarData/' +lang
