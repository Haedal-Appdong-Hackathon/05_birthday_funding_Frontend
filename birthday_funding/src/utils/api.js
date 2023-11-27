// 통신 관련 코드가 작성 될 파일입니다.
export const API_END_POINT = 'http://52.79.95.147:8080'

export const request = async(url, options) => {
    try {
        const res = await fetch(`${API_END_POINT}${url}`, options);

        if (res.ok) {
            return await res.json();
        }
        throw new Error('api error');
    } catch (e) {
        alert(e.message);
    }
}