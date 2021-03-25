import React, {useState} from 'react';
import Button from 'core/components/Button';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import { makeRequest } from 'core/utils/request';
import { SearchResult } from 'core/types/SearchResult';
import { useAlert} from 'react-alert';
import './styles.scss';

const Search = () => {
  const alert = useAlert();
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const [validInputText, setValidInputText] = useState<boolean>(false);
  const [searchResult, setSearchResult] = useState<SearchResult>({
    avatar_url: '',
    html_url: '',
    public_repos: 0,
    followers: 0,
    following: 0,
    company: '',
    blog: '',
    location: '',
    created_at: ''
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    let text = event.target.value;
    setSearch(text);
    setValidInputText(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i.test(text));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasSearched(true);
    setIsLoading(true);
    makeRequest({ url:`/${search}` })
      .then(response => {
        setSearchResult(response.data)
      })
      .catch(error => {
        if (error.response) {
          (error.response.status === 404) 
          ? alert.error("Esse usuário não existe")
          : alert.error("Erro ao pesquisar usuário");
        } else {
          alert.error("Erro de conexão");
        }
        setHasSearched(false);
      })   
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="search-container">
      <div className="search-content">
        {/* Form */}
        <form onSubmit={handleSubmit} className="form-container">
          <h1 className="form-title">Encontre um perfil Github</h1>
          <input 
            className={`form-input ${(validInputText || search === '') ? '': 'input-invalid'}`}
            type="text" 
            placeholder="Usuário Github"
            maxLength={45}
            onChange={handleOnChange}
            value={search}
          />
          <Button text="Encontrar" disabled={!validInputText}/>
        </form>

        {/* Result */}
        { hasSearched &&
          <div className="profile-container">
            <div className="avatar-container">
              { isLoading ? <ImageLoader /> : 
                <>
                  <img className="avatar" src={searchResult.avatar_url} width="290" alt=""/>
                  <a href={searchResult.html_url} target="_blank" rel="noreferrer">
                    <Button text="Ver perfil" disabled={false}/>
                  </a>
                </>
              }
            </div>
            <div className="info-container">
              { isLoading ? <InfoLoader /> : 
                <>
                  <div className="info-profile">
                    <div className="info-profile-item">Repositórios públicos: {searchResult.public_repos}</div>
                    <div className="info-profile-item">Seguidores: {searchResult.followers}</div>
                    <div className="info-profile-item">Seguindo: {searchResult.following}</div>
                  </div>
                  <div className="info-personal">
                    <h1 className="info-personal-title">Informações</h1>
                    <div className="info-personal-field">
                      <span className="field-name">Empresa: </span> 
                      <span className="field-text">{searchResult.company}</span>
                    </div>
                    <div className="info-personal-field">
                      <span className="field-name">Website/Blog: </span> 
                      <span className="field-text">{searchResult.blog}</span>
                    </div>
                    <div className="info-personal-field">
                      <span className="field-name">Localidade: </span> 
                      <span className="field-text">{searchResult.location}</span>
                    </div>
                    <div className="info-personal-field">
                      <span className="field-name">Membro desde: </span> 
                      <span className="field-text">{searchResult.created_at}</span>
                    </div>
                </div>
                </>
              }
            </div>
          </div>
        }

      </div>
    </div>
  )
}

export default Search;